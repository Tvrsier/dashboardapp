import datetime
from typing import Type

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import or_

from app.structures import SessionLocal
from app.structures.auth_schemas import RegisterUser, LoginUser
from app.structures.users import User

router = APIRouter()


def get_db() -> Session:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/register")
def register_user(data: RegisterUser, db_session: Session = Depends(get_db)) -> dict:
    existing_user = db_session.query(User).filter(or_(
        User.email == data.email.__str__(),
        User.name == data.name
    )).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email or username already registered")

    new = User(
        name=data.name,
        email=data.email,
        birth_date=data.birth_date,
        nationality=data.nationality,
        gender=data.gender,
        primary_language=data.primary_language
    )

    new.__hash_password__(data.password)
    db_session.add(new)
    db_session.commit()
    db_session.refresh(new)

    return {"id": new.id, "message": f"User {new.name} registered successfully"}


@router.post("/login")
def login_user(data: LoginUser, db_session: Session = Depends(get_db)) -> dict:
    user: User = db_session.query(User).filter(or_(
        User.email == data.email_or_username,
        User.name == data.email_or_username
    )).first()
    if not user:
        raise HTTPException(status_code=401, detail="User not registered")
    if not user.__verify_password__(data.password):
        raise HTTPException(status_code=401, detail="Invalid user or password")

    return {"message": "OK",
            "user": {
                "name": user.name,
                "email": user.email,
                "birth": user.birth_date,
                "created_at": user.created_at,
                "gender": user.gender,
                "nationality": user.nationality,
                "primary_language": user.primary_language
            }
            }
