import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';


export const RestaurantInfoCard = ({restaurant = {}}) => {
    const {
        name = "Random Restaurant",
        icon,
        photos = [
            "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ],
        address = "101 random resto address",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    }=restaurant;
   return(
       <Card>           
           <Card.Cover key={name} style={style.cover} source={{uri:photos[0]}} />
           <Card.Content>
               <Title>{name}</Title>
           </Card.Content>
       </Card>
   );
};

const style = StyleSheet.create ({
    cover: {
        padding: 13,
    }
});