import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
import useRestaurants from '../hooks/useRestaurants'
import { FlatList } from 'react-native'

const ResultsList = ({ title, results }) => {

    return <View>
        <Text
            style={styles.title}
        >{title}</Text>
        <Text>Results length = {results.length}</Text>
        <FlatList
            horizontal
            data={results}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
                return <Text>{item.name}</Text>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default ResultsList;
