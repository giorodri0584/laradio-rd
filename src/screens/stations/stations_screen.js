import React, { Component,  } from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { selectStations } from './stationsSlice';

const StationsScreen = () => {
    const stations = useSelector(selectStations);
    const cities = ['Santiago', 'Santo Domingo']

    const cityList = ({item}) => {
        const stationsToRender = stations.filter(station => station.ciudad === item) 
        return (
            <View>
                <Text style={styles.listHeaderStyle}>{item}</Text>
                <FlatList
                    data={stationsToRender}
                    renderItem={listItem}
                    horizontal
                />
            </View>
        );
    }

    const listItem = ({ item }) => {
        return (
            <Card style={styles.cardStyle}>
                <Image 
                    source={{uri: item.logoUrl}} 
                    style={styles.stationImageStyle}
                />
            </Card>
        );
    }

    return (
        <FlatList
            data={cities}
            renderItem={cityList}
            keyExtractor={item => item}
        />
    );
}

const styles = StyleSheet.create({
    cardStyle: {
        height: 150,
        width: 150,
        margin:8
    },
    listHeaderStyle: {
        padding: 8
    },
    stationImageStyle: {
        height: 150,
        width: 150
    }
})

export default StationsScreen;