
import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native';

const button = [
    ['CLEAR', 'DEL'],
    [7, 8, 9, '/'],
    [4, 5, 6, 'x'],
    [1, 2, 3, '-'],
    [0, '.', '=', '+'],
];


export default class KeyNumber extends Component {

    render() {
        const { value, handleOnPres } = this.props;

        return <TouchableOpacity
            style={styles.Number}
            onPress={() => handleOnPres(value)}
        >
            <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>

    }

}

const styles = StyleSheet.create({

    Number: {
        backgroundColor: 'yellow',
        flex: 1,
        margin: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 35,
        fontWeight: 'bold'
    }
})
