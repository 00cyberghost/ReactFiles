import { useQuery } from "react-query"
import axios from "axios"

export const Home = () => {

    const { data,isLoading,isError,refetch } = useQuery(['cat'], () => {

        return axios.get('https://catfact.ninja/fact').then((res) => res.data);
    })

    if(isLoading) return <h1>Loading...</h1>

    if(isError) return <h1>Sorry there was an eror loading the requested resource</h1>
    
    return (
        <div>
            <h1>This is the homepage </h1>
            <p>{ data?.fact }</p>
            <button onClick={refetch}>Refresh</button>
        </div>
    )
}