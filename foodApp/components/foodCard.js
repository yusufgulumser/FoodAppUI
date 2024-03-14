import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const FoodCard = ({item,index}) => {
    const navigation= useNavigation();
    return ( 
        <Animatable.View delay={index*200} animation="slideInRight" style={styles.imageView}>
            <View style={styles.container}>
                <Image source={item.image} style={styles.imageStyle}/>
            </View>
            <View style={styles.itemDetails}>
                <Text style={styles.textNameStyle}>{item.name}</Text>
                <Text style={{color:"#FFFFFF"}}>{item.ingredients}</Text>
            </View>
            <View style={styles.priceView}>
                <Text style={styles.priceStyle}>{item.price}</Text>
                <TouchableOpacity onPress={() => navigation.navigate("details", { item })} style={{backgroundColor:"#FFFFFF", padding:12,borderRadius:9999 }}>
                    <Svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <Path d="M4 6h16l2 12H2z" />
                        <Path d="M9 6v-4H7a3 3 0 0 0-3 3v1" />
                        <Path d="M18 6v-4h-2a3 3 0 0 0-3 3v1" />
                        <Path x1="3" y1="10" x2="21" y2="10" />
                    </Svg>
                </TouchableOpacity>
            </View>
        </Animatable.View>
    );
}
 
export default FoodCard;


const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"center",
        paddingHorizontal:10,
        
    },
    imageView:{
        backgroundColor:"rgba(255,255,255,0.2)",
        marginTop:20,
        marginBottom:20,
        marginRight:24,
        padding:12,
        paddingTop:20,
        paddingBottom:20,
        borderRadius:40
    },
    imageStyle:{
        height:200,
        width:200,
        borderRadius:30
    },
    itemDetails:{
        flex:1,
        paddingHorizontal:12,
        paddingVertical:8,
        marginVertical:8
    },
    priceView:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:4,
        alignItems:"center"
    },
    textNameStyle:{
        fontSize:20,
        color:"#FFFFFF",
        fontWeight:"500",
        letterSpacing:1
    },
    priceStyle:{
        fontSize:24,
        fontWeight:"600",
        color:"#FFFFFF"
    } 

});
