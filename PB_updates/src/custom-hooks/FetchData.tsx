import { useEffect, useState } from "react"
import { server_calls } from "../api/server"

export const useGetData = () => {
    const [contactData, setData] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }
    //use Effect on mount
    useEffect( () => {
        handleDataFetch();
    }, [])
    //If '[]' wasnt there it will refresg EVERYTIME the page is interacted with
    //If 'x' is present will only occur once
    //If 'x' is replaced with component name it will refresh everytime THAT component is toouched
    return { contactData, getData: handleDataFetch}
}