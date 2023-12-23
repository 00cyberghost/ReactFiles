import { useQuery } from "react-query";
import axios from "axios";

export const useGetCat = () => {

    const { data, refetch, isLoading : isCatLoading, error} = useQuery(['cat'], async () => {
        return axios.get('https://catfact.ninja/fact').then(res => res.data)
    });

    const refetchData = () => {
        refetch()
        
    }

    return { data, refetchData, isCatLoading, error }
}