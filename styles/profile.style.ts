import { StyleSheet } from "react-native";

export const stylesProfile = StyleSheet.create({
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 10,
        marginVertical: 15,
    },
    headerImg: {
        width: 80,
        height: 80,
        borderRadius: 50
    },
    headerInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        color: 'white',
        justifyContent: 'center'
    },
    mainInfo: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10,
    },
    mainInfoBlock: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15
    }
});