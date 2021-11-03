import React from 'react';
import { StatusBar, StyleSheet, View, SafeAreaView} from 'react-native';
import { Searchbar } from 'react-native-paper';
import {RestaurantInfoCard} from '../components/restaurant-info-card.components';

export const RestaurantScreen = () => (

    <SafeAreaView style={styles.container}>
    <View style={styles.search}>
        <Searchbar 
        placeholder="Search..."
        />
    </View>
    <View style={styles.list}>
        <RestaurantInfoCard />
    </View>
    </SafeAreaView>

);

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginTop:StatusBar.currentHeight
    },
    search: {
        backgroundColor: '#fff',
        padding:30
    },
    list: {
        flex:1, 
        backgroundColor:'blue', 
        padding:30
    }
});