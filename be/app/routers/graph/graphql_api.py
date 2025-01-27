from strawberry.fastapi import GraphQLRouter
import strawberry

@strawberry.type
class Query:
    hello: str = "Hello from GraphQL"

schema = GraphQLRouter(strawberry.Schema(query=Query))
