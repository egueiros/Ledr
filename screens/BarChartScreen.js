import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    processColor, Button
} from 'react-native';
import styles from '../themes/CompanyStyle';
import { LineChart } from 'react-native-charts-wrapper';
import { Colors } from '../themes';

class BarChartScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
        
            headerTintColor: '#ffffff',
            headerStyle: {
                backgroundColor: Colors.background,
                borderBottomColor: 'black',
                borderBottomWidth: 0,
            },
            headerBackTitle: null,
        };
    };

    constructor(props) {
        super(props);

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
            data: {
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
        };
    }

    handleSelect(event) {
        let entry = event.nativeEvent
        if (entry == null) {
            this.setState({ ...this.state, selectedEntry: null })
        } else {
            this.setState({ ...this.state, selectedEntry: JSON.stringify(entry) })
        }

        console.log(event.nativeEvent)
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Colors.background }}>
                <Text style={styles.welcome}>{this.state.company.name}</Text>
                <View style={styles.companyInfo}>
                    <Text style={{ fontSize: 20, color: Colors.frost }}>Company Address</Text>
                    <Text style={styles.instructions}>{this.state.company.location.address}</Text>
                    <Text style={styles.instructions}>{this.state.company.location.city}</Text>
                    <Text style={styles.instructions}>{this.state.company.location.country}</Text>
                 </View>


                <View style={{ flex: 1 }}>
                    <LineChart
                        style={styles.chart}
                        data={this.state.data}
                        xAxis={this.state.xAxis}
                        animation={{ durationX: 2000 }}
                        legend={this.state.legend}
                        gridBackgroundColor={processColor('#ffffff')}
                        visibleRange={{ x: { min: 5, max: 5 } }}
                        drawBarShadow={false}
                        drawValueAboveBar={true}
                        drawHighlightArrow={true}
                        onSelect={this.handleSelect.bind(this)}
                        highlights={this.state.highlights}
                        onChange={(event) => console.log(event.nativeEvent)}
                    />
                </View>
            </View>
        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#F5FCFF'
//     },
//     chart: {
//         flex: 1
//     }
// });

export default BarChartScreen;