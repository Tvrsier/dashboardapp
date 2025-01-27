from datetime import date
from enum import Enum as PyEnum
from typing import Optional

from pydantic import BaseModel, EmailStr, Field


class Gender(PyEnum):
    MALE = "male"
    FEMALE = "female"
    OTHERS = "others"


class RegisterUser(BaseModel):
    name: str = Field(..., min_length=3, max_length=50)
    email: EmailStr
    password: str = Field(..., min_length=6)
    birth_date: Optional[date] = None
    gender: Optional[Gender] = None
    nationality: Optional[str] = None
    primary_language: Optional[str] = None


class LoginUser(BaseModel):
    email_or_username: str
    password: str
