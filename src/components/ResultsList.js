import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { FlatList } from 'react-native'
import ResultDetails from './ResultDetails'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'


/**
 * 
 * @param {Navi} param0 
 */
const ResultsList = ({ title, results, navigation }) => {

    if (! results.length ){
        return null;
    }

    return <View style={styles.container}>
        <Text
            style={styles.title}
        >{title}</Text>
        {/* <Text>Results length = {results.length}</Text> */}
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity onPress={ () =>  navigation.navigate("ResultsShow",item)}>
                        <ResultDetails result={item} />
                    </TouchableOpacity>
                );
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10,
    }
})

export default withNavigation( ResultsList );
