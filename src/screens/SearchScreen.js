import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
import useRestaurants from '../hooks/useRestaurants'
import ResultsList from '../components/ResultsList'

const SearchScreen = (props) => {

    const [term, setTerm] = useState("");
    const [searchAPI, restaurants, errorMessage] = useRestaurants();

    const filterResultsByPrice = (price) => {
        return restaurants.filter(item => item.price == price)
    };

    return <View>
        <SearchBar
            term={term}
            onTermChange={(newTerm) => setTerm(newTerm)}
            onTermSubmit={() => { searchAPI(term) }}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {restaurants.length} results for the term:  {term} </Text>
        <ResultsList title="Cost Effective" 
            results={filterResultsByPrice('$')}
        />
        <ResultsList title="Pricier" 
        results={filterResultsByPrice('$$')}
        />
        <ResultsList title="Big Spender" 
        results={filterResultsByPrice('$$$')}
        />
    </View>
}

const styles = StyleSheet.create({})

export default SearchScreen;
