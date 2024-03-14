import React, { useState } from 'react';
import { View, StyleSheet, Image, SafeAreaView, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { foodCategories, foodItems } from '../dummyData/data';
import * as Animatable from 'react-native-animatable';
import FoodCard from '../components/foodCard';

const Home = () => {
    const [activeCate,setActiveCate]=useState('Pasta');
    return (
        <View style={styles.container}>
            <Image blurRadius={5} source={require("../img/background.jpg")} style={styles.backgroundImg}/>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.appBarView}>
                    <View style={styles.svgContainer}>
                        <Svg width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                            <Path d="M4 6h16M4 12h16M4 18h16" />
                        </Svg>
                    </View>
                    <View>
                        <Image source={require("../img/food.png")} style={styles.foodLogo} />
                    </View>
                </View>
                <View style={styles}>
                    <Text style={styles.textStyle}>Quick and</Text>
                    <Text style={styles.textStyle}><Text style={styles.flavorful}>Flavorful</Text> Foods</Text>
                </View>
                <View style={styles.searchCont}>
                    <View style={styles.searchView}>
                        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                            <Path d="M21 21l-4.35-4.35" />
                            <Circle cx={10} cy={10} r={8} />
                        </Svg>
                        <TextInput placeholder='Search' style={{marginLeft:8,color:"#374151"}} ></TextInput>
                    </View>
                    <View style={{backgroundColor:"#FFFFFF",borderRadius:20,padding:19,marginTop:30,marginLeft:10}}>
                        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                            <Path d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                        </Svg>
                    </View>
                </View>
                <ScrollView style={styles.scrollViewFoodStyle} horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:15}}>
                    {
                        foodCategories.map((cate,index)=>{
                            let isAct=  cate==activeCate;
                            let textst= isAct? {fontWeight:"bold"}:{}
                            return (
                                <Animatable.View delay={index*200} animation="slideInDown" key={index}>
                                <TouchableOpacity onPress={()=> setActiveCate(cate) } style={{marginRight:36}}>
                                    <Text style={[styles.foodCatText,textst]}>
                                        {cate}
                                    </Text>
                                </TouchableOpacity>
                                </Animatable.View>
                            );
                        })
                    }
                </ScrollView>
                <ScrollView contentContainerStyle={{paddingHorizontal:20}} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        foodItems.map((item,index)=>
                            <FoodCard item={item} key={index} />
                        )
                    }    
                </ScrollView>   
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative"
    },
    appBarView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop:35
    },
    backgroundImg: {
        position: "absolute",
        height: "100%",
        width: "100%"
    },
    svgContainer: {
        marginLeft:20,

    },
    foodLogo:{
        height:60,
        width:120,
    },
    bodyView:{
        marginTop:60,
        marginVertical:100
    },
    textStyle:{
        marginHorizontal:10,
        fontSize:55,
        fontWeight:'300',
        color:"#FFFFFF"
    },
    flavorful:{
        fontWeight:"800"
    },
    searchCont:{
        marginHorizontal:16,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",

    },
    searchView:{
        flexDirection:"row",
        flex:1,
        padding:16,
        backgroundColor:"#FFFFFF",
        borderRadius:20,
        marginTop:30,
    },
    scrollViewFoodStyle:{
        marginTop:24,
        marginBottom:24,
        paddingTop:24,
        paddingBottom:24,
        maxHeight:80
    },
    foodCatText:{
        fontSize:16,
        letterSpacing:2,
        color:"white"
        
    }
});

export default Home;
