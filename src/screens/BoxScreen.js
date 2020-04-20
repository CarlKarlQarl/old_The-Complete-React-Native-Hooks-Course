import React from "react"
import { Text, View, StyleSheet } from "react-native"

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child 1</Text>
            <Text style={styles.textTwoStyle}>Child 2</Text>
            <Text style={styles.textThreeStyle}>Child 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        height: 200,
        borderWidth: 3,
        borderColor: "black",
        flexDirection: "row",
        alignItems: "flex-start"
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: "red",
        flex: 1,
        alignSelf: "flex-start"
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: "red",
        flex: 1,
        alignSelf: "center",
        position: "absolute"
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: "red",
        flex: 1,
        alignSelf: "flex-end"
    }
})

export default BoxScreen