import React from "react";
import Background from "./Background";
import { ImageBackground,Text, View } from "react-native";
import { useEffect } from "react";


const Welcome=({navigation})=>{
    useEffect(() => {
        const timer = setTimeout(() => {
          
          navigation.navigate("Login");
        }, 1500);
    
        return () => clearTimeout(timer); 
      }, [navigation]);

      

    return(<Background><View><Text style={{color:'white',fontFamily: 'Kanit_400Regular',fontWeight:600,fontSize:70}}>PlayPals</Text></View>
       <ImageBackground source={require('./asset/Sachin.png')}
        style={{flex: 1,
            height: 300,
            width: 500,
            position:'absolute',
            bottom:0,
            opacity:0.1,
            left:0}}></ImageBackground>

            <ImageBackground source={require('./asset/Football.png')}
        style={{flex: 1,
            height: 620,
            width: 520,
            position:'absolute',
            bottom:200, 
            opacity:0.1,
            right:'10%'}}></ImageBackground>

    </Background>);
}

export default Welcome;