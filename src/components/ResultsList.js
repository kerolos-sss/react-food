import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { FlatList } from 'react-native'
import ResultDetails from './ResultDetails'

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
                return <ResultDetails result={item } />
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
    }
})

export default ResultsList;
