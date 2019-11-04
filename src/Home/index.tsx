import * as React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from './components/Colors';
import testIDs from '../testIDs';

const Button = (props: { text: string, children?: React.ReactChildren, onPress: () => void, testID?: string }) => (
    <TouchableOpacity style={styles.button} onPress={props.onPress} testID={props.testID}>
        {
            props.children
                ? props.children
                : <Text style={styles.buttonText}>{props.text}</Text>
        }
    </TouchableOpacity>
);


export default function Home() {
    return (
        <View style={styles.container} testID={testIDs.screen.Home}>
            <Button text="test1" onPress={() => {}} testID={testIDs.button1}/>
            <Button text="test2" onPress={() => {}} testID={testIDs.button2}/>
            <Button text="test3" onPress={() => {}} testID={testIDs.button3}/>
       </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: Colors.dark,
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 30,
    },
    buttonText: {
        color: Colors.white
    },
});
