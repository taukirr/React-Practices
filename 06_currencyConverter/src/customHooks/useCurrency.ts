import { useEffect, useState } from "react";

function useCurrency(curr) {
    const [data, setData] = useState({})
    useEffect(() => {
        //for changing the currency you need to make changes at last add '=' and then add currency name
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curr}.json`)
        .then((resp) => resp.json())
        .then((resp) => setData(resp[curr]))
        console.log(data);
    }, [curr])
    return data
}

export default useCurrency;