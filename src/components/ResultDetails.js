import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'


const ResultDetails = ({ result }) => {

    return <View style={styles.container}>
        <Image
            style={styles.image}
            source={{ uri: result.image_url }}
        />
        <Text
            style={styles.name}
        >Name: {result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count} Reviews</Text>

    </View>
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 15
    },
    image: {
        width: 250,
        borderRadius: 5,
        height: 120,
        marginBottom: 5
    },
    name: {
        fontSize: 14,
        fontWeight: "bold"
    }
})

export default ResultDetails;
