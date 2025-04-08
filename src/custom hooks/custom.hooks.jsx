import axios from "axios"
import { useCallback, useEffect, useState } from "react"


export const fetchData = (url) => {

    const [val, setVal] = useState([])

    useEffect(() => {


        axios.get(url).then(response => {

            setVal(response.data)

        }).catch(err => err)

    }, [url])

    return val
}
