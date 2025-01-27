from fastapi import FastAPI

from app.routers.rest import auth
from routers.graph import graphql_api
from routers.rest import rest_api
from app.structures import Base, engine
import uvicorn

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(rest_api.router, prefix="/api", tags=["REST"])
app.include_router(auth.router, prefix="/auth", tags=["REST"])

app.include_router(graphql_api.schema, prefix="/graphql")
# app.add_route("/graphql", graphql_api.schema)


if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
    )
