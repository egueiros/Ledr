import React, { Component } from 'react';
import {Text, View, Button } from 'react-native';
import styles from '../themes/CompanyStyle' 

export default class CompaniesScreen extends Component {

    static navigationOptions = {
        title: "Companies"
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>This is the list view</Text>
                <Button title="Go to Company Detail" onPress={() => this.props.navigation.navigate("detail", {
                    companyName: 'Contoso'
                })}/>
            </View>
        )
    }
}