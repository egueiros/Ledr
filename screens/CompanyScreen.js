import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import styles from '../themes/CompanyStyle'; 

export default class CompanyScreen extends Component {

    constructor(props) {
        super(props)

        const company = props.navigation.getParam('info', NaN)

        this.state = {
            company: company
        }
    }

    static navigationOptions = ({ navigation }) => {
        const info = navigation.getParam('info', NaN)
        return {
            title: info.name
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{this.state.company.name}</Text>
                <Text style={styles.instructions}>{this.state.company.name}</Text>
                <Text style={styles.instructions}>{this.state.company.location.address}</Text>
                <Text style={styles.instructions}>{this.state.company.location.city}</Text>
                <Text style={styles.instructions}>{this.state.company.location.country}</Text>
                <Button title="Go Back" onPress={() => this.props.navigation.goBack()} />
            </View>
        )
    }
}