import React, { useState } from "react"
import { View, Text, Button, StyleSheet } from "react-native"
import ColorCounter from "../components/ColorCounter"

const COLOR_INCREMENT = 15

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const setColor = (color, change) => {
        switch(color){
            case "red":
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
                return
            case "green":
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                return
            case "blue":
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
                return
            default:
                return
        }
    }

    return (
        <View>
            <Text>Change the color</Text>
            <View style={{
                height: 100,
                width: 100,
                backgroundColor: `rgb(${red}, ${green}, ${blue})`
            }}/>
            <ColorCounter 
                color="Red"
                onIncrease={() => setColor("red", COLOR_INCREMENT)}
                onDecrease={() => setColor("red", COLOR_INCREMENT * -1)}
            />
            <ColorCounter 
                color="Green"
                onIncrease={() => setColor("green", COLOR_INCREMENT)}
                onDecrease={() => setColor("green", COLOR_INCREMENT * -1)}
            />
            <ColorCounter 
                color="Blue"
                onIncrease={() => setColor("blue", COLOR_INCREMENT)}
                onDecrease={() => setColor("blue", COLOR_INCREMENT * -1)}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SquareScreen