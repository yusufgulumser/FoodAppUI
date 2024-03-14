import { useNavigation } from "@react-navigation/native";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import * as Animatable from 'react-native-animatable';


export default function FoodDetailsScreen(props){
    let item=props.route.params.item;
    let navigation=useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require("../img/background.jpg")} blurRadius={40} style={styles.ImageStyle}/>
            <SafeAreaView>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Icon onPress={()=>navigation.goBack()} name="arrow-left" size={30} color="black" style={styles.backIcon} /> 
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="heart-outline" size={30} color="black" style={styles.heartIcon}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.PushedImageView}>
                    <Image source={item.image} style={styles.PushedImage}/>
                    <Text style={{fontSize:30, color:"#EEEEEE", paddingTop:10}}>{item.name}</Text>
                </View>
                <View style={styles.AddButtonsView}>
                    <View style={styles.AddButtonsInnerView}>
                        <TouchableOpacity style={styles.minusIconTouch}>
                            <Icon name="minus" size={30} color="black" />
                        </TouchableOpacity>
                        <Text style={{fontSize:20, marginHorizontal:10}}>1</Text>
                        <TouchableOpacity style={styles.minusIconTouch}>
                            <Icon name="plus" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.itemDetailsView}>
                    <Animatable.View delay={150} animation="slideInDown">
                        <Icon name="fire" size={40} color="red"/>
                        <Text style={{fontWeight:"bold"}}>{item.calories} cal</Text>
                    </Animatable.View>
                    <Animatable.View delay={250} animation="slideInDown">
                        <Icon name="clock" size={40} color="blue"/>
                        <Text style={{fontWeight:"bold"}}>{item.time} min</Text>
                    </Animatable.View>
                    <Animatable.View delay={350} animation="slideInDown">
                        <Icon name="star" size={40} color="pink"/>
                        <Text style={{fontWeight:"bold"}}>{item.average} fav</Text>
                    </Animatable.View>
                </View>
                <View style={styles.descView}>
                    <Animatable.Text animation="slideInUp" style={styles.animatedTextStyle}>
                        Description
                    </Animatable.Text>
                    <Animatable.Text delay={150} animation="slideInUp" style={styles.animatedTextDesc}>
                        {item.description}
                    </Animatable.Text>
                </View>
                <View style={styles.submitView}>
                    <Animatable.Text delay={120} animation="slideInLeft" style={styles.lastPrice}>
                        {item.price}
                    </Animatable.Text>
                    <Animatable.View delay={120} animation="slideInRight">
                        <TouchableOpacity style={styles.buttonStyle}>
                            <Text style={styles.buttonText}>Add to Cart</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1
    },
    ImageStyle:{
        height:425,
        width:"100%",
        position:"absolute",
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50
    },
    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    backIcon: {
        marginRight: 20,
        padding:5,
        backgroundColor:"#EEEEEE",
        borderRadius:20
    },
    heartIcon:{
        padding:5,
        backgroundColor:"#EEEEEE",
        borderRadius:20
    },
    PushedImageView:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    PushedImage:{
        height:250,
        width:250,
        borderRadius:50
    
    },
    AddButtonsView:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:20
    },
    AddButtonsInnerView:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#F3F4F6",
        borderRadius:15,
    },
    minusIconTouch:{
        padding:5,
        backgroundColor:"#EEEEEE",
        borderRadius:15,
        borderColor:"#E5E7EB",
        borderWidth:2

    },
    itemDetailsView:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginHorizontal:16,
        height:65,
        overflow:"hidden",
        marginTop:20
    },
    descView:{
        marginHorizontal:16,
        marginTop:24,
        height:150
    },
    animatedTextStyle:{
        fontSize:30,
        fontWeight:"600",
        color:"#374151"
    },
    animatedTextDesc:{
        color:"#374151",
        letterSpacing:1,
        fontWeight:"400",
        fontSize:15
    },
    submitView:{
        marginHorizontal:16,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:100
    },
    lastPrice:{
        fontSize:40,
        fontWeight:"600",
        color:"#374151"
    },
    buttonStyle:{
        backgroundColor:"#374151",
        padding:16,
        paddingHorizontal:56,
        borderRadius:20
    },
    buttonText:{
        color:"#EEEEEE",
        fontSize:15,
        fontWeight:"600"
    }


});
