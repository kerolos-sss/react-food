import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
import useRestaurants from '../hooks/useRestaurants'
import ResultsList from '../components/ResultsList'
import { ScrollView } from 'react-native-gesture-handler'

import { createStackNavigator, NavigationStackProp } from 'react-navigation-stack';
/**
 * 
 * @param {NavigationStackProp} props 
 */
const SearchScreen = (props) => {
    console.log(props);
    // let { navigation } = props;
    
    const [term, setTerm] = useState("");
    const [searchAPI, restaurants, errorMessage] = useRestaurants();

    const filterResultsByPrice = (price) => {
        return restaurants.filter(item => item.price == price)
    };

    return <>
        <SearchBar
            term={term}
            onTermChange={(newTerm) => setTerm(newTerm)}
            onTermSubmit={() => { searchAPI(term) }}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}

        <ScrollView >
            {/* <Text>We have found {restaurants.length} results for the term:  {term} </Text> */}
            <ResultsList
                // navigation={navigation}
                title="Cost Effective"
                results={filterResultsByPrice('$')}
            />
            <ResultsList
                // navigation={navigation}
                title="Pricier"
                results={filterResultsByPrice('$$')}
            />
            <ResultsList
                // navigation={navigation}
                title="Big Spender"
                results={filterResultsByPrice('$$$')}
            />
        </ScrollView>
    </>
}

const styles = StyleSheet.create({})

export default SearchScreen;
