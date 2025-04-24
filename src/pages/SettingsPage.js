//@ts-nocheck
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Switch, Text, useTheme} from 'react-native-paper';
import {useThemeStore} from '../../App';

const SettingsPage = () => {
    const theme = useTheme();
    const {isDarkTheme, toggleTheme} = useThemeStore();

    return (
        <View
            style={[
                styles.container,
                {backgroundColor: theme.colors.background},
            ]}>
            <Text style={[styles.title, {color: theme.colors.text}]}>
                Settings
            </Text>
            <View style={styles.row}>
                <Text style={{color: theme.colors.text}}>Dark Theme</Text>
                <Switch value={isDarkTheme} onValueChange={toggleTheme} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
});

export default SettingsPage;
