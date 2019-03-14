import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import styles from '../themes/CompanyStyle'; 

export default class CompanyScreen extends Component {

    constructor(props) {
        super(props)

        const company = props.navigation.getParam('companyName', NaN)

        this.state = {
            company: company
        }
    }

    static navigationOptions = ({ navigation }) => {
        const info = navigation.getParam('companyName', NaN)
        return {
            title: info
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{this.state.company}</Text>
                <Text style={styles.instructions}>Below is some info</Text>
                <Button title="Go Back" onPress={() => this.props.navigation.goBack()} />
            </View>
        )
    }
}