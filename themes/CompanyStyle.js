import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '.'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    row: {
        width: Metrics.screenWidth / 2 - Metrics.doubleBaseMargin,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: Metrics.baseMargin,
        backgroundColor: Colors.frost,
        borderRadius: Metrics.smallMargin
    },
    sectionHeader: {
        paddingTop: Metrics.doubleBaseMargin,
        width: Metrics.screenWidth,
        alignSelf: 'center',
        margin: Metrics.baseMargin,
        backgroundColor: Colors.background
    },
    boldLabel: {
        fontWeight: 'bold',
        alignSelf: 'center',
        color: Colors.text,
        textAlign: 'center',
        marginBottom: Metrics.smallMargin
    },
    label: {
        alignSelf: 'center',
        color: Colors.text,
        textAlign: 'center'
    },
    listContent: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});