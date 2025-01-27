from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

Base = declarative_base()

engine = create_engine("sqlite:///./data/test.db")
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)