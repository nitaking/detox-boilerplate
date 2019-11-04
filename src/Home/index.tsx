import * as React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

import Colors from '../Colors';
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


export default function Home(props: NavigationScreenProp.navigate) {
    const gotoPage1 = () => props.navigation.navigate('Page1')
    const gotoPage2 = () => props.navigation.navigate('Page2')
    const gotoPage3 = () => props.navigation.navigate('Page3')

    return (
        <View style={styles.container} testID={testIDs.screen.Home}>
            <Button text="test1" onPress={gotoPage1} testID={testIDs.button1}/>
            <Button text="test2" onPress={gotoPage2} testID={testIDs.button2}/>
            <Button text="test3" onPress={gotoPage3} testID={testIDs.button3}/>
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
