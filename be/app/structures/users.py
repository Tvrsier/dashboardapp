from sqlalchemy import Column, Integer, String, DateTime, func, Enum
from app.structures import Base
from passlib.context import CryptContext
from app.structures.auth_schemas import Gender

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String, nullable=False)
    created_at = Column(DateTime, default=func.now())
    gender = Column(Enum(Gender, native_enum=False), nullable=True)
    birth_date = Column(DateTime, nullable=True)
    nationality = Column(String, nullable=True)
    primary_language = Column(String, nullable=True)

    def __hash_password__(self, raw_pwd: str):
        self.password = pwd_context.hash(raw_pwd)

    def __verify_password__(self, raw_pwd: str) -> bool:
        return pwd_context.verify(raw_pwd, self.password)
