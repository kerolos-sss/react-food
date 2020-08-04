import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'
const SearchBar = ({term, onTermChange, onTermSubmit}) => {

    return <View style={styles.background}>
        <Feather
            name="search"
            size={30}
            style={styles.icon}
        />
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            placeholder="search"
            onChangeText={ (text) => onTermChange(text)}
            value={term}
            onEndEditing={onTermSubmit}
        />
    </View>
}

const styles = StyleSheet.create({
    background: {
        marginTop: 10,
        backgroundColor: "#f0eeee",
        borderRadius: 10,
        height: 50,
        marginHorizontal: 15,
        flexDirection: "row"
    },
    input: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: 'black',
        paddingHorizontal: 4,
        fontSize: 18,
    },
    icon: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15,
    }
})

export default SearchBar;
