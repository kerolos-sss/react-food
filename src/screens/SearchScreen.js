import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = (props) => {

    const [term, setTerm] = useState("");
    const [restaurants, setRestaurants ] = useState([]);

    const searchAPI = () => {
        yelp.get("/search", {
            params: {
                limit: 50,
                term: term,
                location: 'san jose'
            }
        }).then (resp => {
            setRestaurants(resp.data.businesses )
        }).catch(error => console.error(error))
    }

    return <View>
        <SearchBar
            term={term}
            onTermChange={(newTerm) => setTerm(newTerm)}
            onTermSubmit={ () => { searchAPI() }}
        />
        <Text>We have found {restaurants.length} results for the term:  { term } </Text>
    </View>
}

const styles = StyleSheet.create({})

export default SearchScreen;
