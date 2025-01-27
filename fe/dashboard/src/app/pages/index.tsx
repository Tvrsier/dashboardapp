import {gql, useQuery} from "@apollo/client";
import client from "../lib/apollo";

const QUERY = gql`
    query {
        hello
    }
`;

export default function Home() {
    const {data, loading, error} = useQuery(QUERY, {client});

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>


    return <h1>{data.hello}</h1>
}