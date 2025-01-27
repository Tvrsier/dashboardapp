import {fetchData} from "./lib/apollo"

export default async function Home() {
    const data = await fetchData();

    return <h1>{data.hello}</h1>;
}