import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
import useRestaurants from '../hooks/useRestaurants'

const SearchScreen = (props) => {

    const [term, setTerm] = useState("");
    const [searchAPI, restaurants, errorMessage] = useRestaurants();

    return <View>
        <SearchBar
            term={term}
            onTermChange={(newTerm) => setTerm(newTerm)}
            onTermSubmit={() => { searchAPI(term) }}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {restaurants.length} results for the term:  {term} </Text>
    </View>
}

const styles = StyleSheet.create({})

export default SearchScreen;
