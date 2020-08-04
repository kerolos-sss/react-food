import { useState } from "react";
import yelp from "../api/yelp";


const useRestaurants  = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState("")

    const searchAPI = (searchTerm) => {
        yelp.get("/search", {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
        }).then(resp => {
            setRestaurants(resp.data.businesses)
        }).catch(error => {
            console.error(error);
            setErrorMessage("Something Went Wrong");
        })
    }
    useEffect(() => {
        searchAPI('pasta');
    }, []);

    return [searchAPI, restaurants, errorMessage, ]
}

export default useRestaurants;