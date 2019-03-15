import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, processColor } from 'react-native';
import styles from '../themes/CompanyStyle';
import { LineChart } from 'react-native-charts-wrapper';

export default class CompanyScreen extends Component {

    constructor(props) {
        super(props)

        const company = props.navigation.getParam('info', NaN)

        this.state = {
            company: company,
            legend: {
                enabled: false,
                textSize: 14,
                form: 'SQUARE',
                formSize: 15,
                xEntrySpace: 10,
                yEntrySpace: 5,
                formToTextSpace: 5,
                wordWrapEnabled: true,
                maxSizePercent: 0.5
            },
            chartData: {
                dataSets: [{
                    values: [{ y: 100 }, { y: 105 }, { y: 102 }, { y: 110 }, { y: 114 }, { y: 109 }, { y: 105 }, { y: 99 }, { y: 95 }],
                    label: 'Bar dataSet',
                    config: {
                        color: processColor('teal'),
                        barShadowColor: processColor('lightgrey'),
                        highlightAlpha: 90,
                        highlightColor: processColor('red'),
                    }
                }],

                config: {
                    barWidth: 0.7,
                }
            },
            highlights: [{ x: 3 }, { x: 6 }],
            xAxis: {
                valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                granularityEnabled: true,
                granularity: 1,
            }
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