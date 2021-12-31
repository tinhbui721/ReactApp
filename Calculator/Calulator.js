
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform

} from 'react-native';
import KeyNumber from './KeyNumber'

const button = [
    ['CLEAR', 'DEL'],
    ['7', '8', '9', '÷'],
    ['4', '5', '6', 'x'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
];

export default class Calculator extends Component {

    constructor() {
        super();
        this.initialState = {
            displayValue: '0',
            operator: null,
            firstValue: '',
            secondValue: '',
            nextValue: false
        }
        this.state = this.initialState;
    }

    renderKeyboard() {
        let Layouts = button.map((buttonRows, index) => {
            let rowItem = buttonRows.map((buttonItem, buttonIndex) => {
                return <KeyNumber
                    key={'btn-' + buttonIndex}
                    value={buttonItem}
                    handleOnPres={this.handleInput.bind(this, buttonItem)}
                />

            });
            return <View style={styles.inputRows} key={'row-' + index}>
                {rowItem}
            </View>
        });

        return Layouts;
    }

    handleInput = (input) => {
        const { displayValue, operator, firstValue, secondValue, nextValue } = this.state;

        switch (input) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.setState({
                    displayValue: (displayValue === '0') ? input : displayValue + input
                })
                if (!nextValue) {
                    this.setState({
                        firstValue: firstValue + input
                    })
                } else {
                    this.setState({
                        secondValue: secondValue + input
                    })
                }
                break;
            case '=':
                let formatOperator = (operator == 'x') ? '*' : (operator == '÷') ? '/' : operator
                let result = eval(firstValue + formatOperator + secondValue)
                this.setState({
                    displayValue: result % 1 === 0 ? result :   result.toFixed(2) , 
                    firstValue:result % 1 === 0 ? result :   result.toFixed(2),
                    secondValue:'',
                    operator:null,
                    nextValue:false,

                })
                break
            case '+':
            case '-':
            case '÷':
            case 'x':
                this.setState({
                    nextValue:true,
                    operator: input,
                    displayValue: (operator !== null ? displayValue.substring(0, displayValue.length - 1) : displayValue) + input
                })
                break;
            case '.':
                let dot = displayValue.toString().slice(-1)
                this.setState({
                    displayValue: dot !== '.' ? displayValue + input : displayValue
                })
                if (!nextValue) {
                    this.setState({
                        firstValue: firstValue + input
                    })
                } else {
                    this.setState({
                        secondValue: secondValue + input
                    })
                }

                break;
            case 'CLEAR':
                this.setState(this.initialState);
                break;

            case 'DEL':
                let string = displayValue.toString();
                let deletestring = string.substring(0, string.length - 1);
                this.setState({
                    displayValue: string.length === 1 ? '0' : deletestring,
                    firstValue: string.length == 1 ? '' : deletestring
                })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.display} >
                    <Text style={styles.inputNumber}>{this.state.displayValue}</Text>
                </View>
                <View style={styles.input}>
                    {this.renderKeyboard()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    display: {
        flex: 2,
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    input: {
        flex: 8,
        backgroundColor: 'aqua'
    },
    inputNumber: {
        color: 'white',
        fontSize: 65,
        paddingLeft: 10
    },
    Number: {
        backgroundColor: 'yellow',
        flex: 1,
        margin: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputRows: {
        flex: 1,
        flexDirection: 'row'
    }
})
