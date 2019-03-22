import React, { Component } from 'react';
import {Text, View, Button, ListView, TouchableOpacity } from 'react-native';
import styles from '../themes/CompanyStyle' 
import { Colors } from '../themes';

export default class CompaniesScreen extends Component {

    static navigationOptions = {
        title: "Companies",
        headerTintColor: '#ffffff',
        headerStyle: {
            backgroundColor: Colors.background,
            borderBottomColor: 'black',
            borderBottomWidth: 0,
        },
    };

    constructor(props) {
        super(props)

        // Load and sort companies
        const data = require('../assets/comp.json')
        data.sort((a, b) => a.name.localeCompare(b.name))

        // Check if shows are different
        const rowHasChanged = (r1, r2) => r1 !== r2

        // DataSouce configured
        const ds = new ListView.DataSource({ rowHasChanged })

        // Datasouce is set in state
        this.state = {
            dataSource: ds.cloneWithRows(data)
        }

        // Binds function so we can access `this`?
        this.renderRow = this.renderRow.bind(this)
    }

    renderRow(rowData){
        return(
            <TouchableOpacity style={styles.row} onPress={() => this.props.navigation.navigate('barChart', {
                info: rowData,
            })}>
                <Text style={styles.boldLabel}>{rowData.name}</Text>
                <Text style={styles.label}>{rowData.location.city}</Text>
            </TouchableOpacity>
        )
    }

    // returns true if the dataSource is empty
    noRowData() {
        return this.state.dataSource.getRowCount() === 0
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    contentContainerStyle={styles.listContent}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderFooter={this.renderFooter}
                    enableEmptySections
                    pageSize={15}
                />
            </View>
        )
    }
}