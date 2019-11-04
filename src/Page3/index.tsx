import * as React from "react";
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../Colors';
import testIDs from '../testIDs';

export default function Page1() {
    return (
        <View style={styles.container} testID={testIDs.screen.Page3}>
            <Text style={styles.text}>Show Page 3!!</Text>
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
    text: {
        color: Colors.white
    },
});
