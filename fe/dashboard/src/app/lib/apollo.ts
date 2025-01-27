import {ApolloClient, InMemoryCache, gql} from "@apollo/client"

const client = new ApolloClient({
    uri: "http://localhost:8000/graphql",
    cache: new InMemoryCache(),
});

export async function fetchData() {
    try {
        const { data } = await client.query({
            query: gql`
            query {
                hello
            }
        `,
        });
        console.log("Data received: ", data)
        return data
    } catch (error) {
        console.error("Error during query: ", error)
        throw error
    }
}