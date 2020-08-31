import React, { useState, useEffect } from 'react'
import { ScrollView, View, StyleSheet, Text, FlatList, Image } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

import { withNavigation } from 'react-navigation'



const ResultsShowScreen = (props) => {

    let { navigation } = props;

    
    const itemId = navigation.getParam("id");
    
    const [result, setResult] = useState(null);
    console.log(result);
    
    const getResults = async (id) => {
        let response = await yelp.get(`${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResults(itemId);
    }, [])
 


    return <>
        {/* {errorMessage ? <Text>{errorMessage}</Text> : null} */}

        {/* <ScrollView > */}
            <Text>{result?.name}</Text>
            <FlatList 
                data={result?.photos || []}
                keyExtractor={(photoUrl) => photoUrl}
                renderItem={({item}) => {
                    return <Image 
                        style={styles.image}
                        source={{uri: item}}
                     /> 
                }} 
            />
        {/* </ScrollView> */}
    </>
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
})

export default ResultsShowScreen;
