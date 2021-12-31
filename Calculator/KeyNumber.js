
import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native';



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
