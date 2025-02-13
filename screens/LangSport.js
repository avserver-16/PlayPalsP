import React from "react";
import Background from "./Background";
import { Text, View ,TouchableOpacity,ImageBackground} from "react-native";


const LangSport=({navigation})=>{
    return(<Background><ImageBackground source={require('./asset/Volleyball.png')}
    style={{flex: 1,
        height: 400,
        width: 400,
        position:'absolute',
        bottom:0, 
        opacity:0.08,
        right:0,zIndex:0}}></ImageBackground> 
        <Text style={{position:'absolute',color:'white',fontFamily:'Kanit_400Regular',left:20,top:80,fontSize:36,opacity:.85}}>Select your Sport
        </Text>
        <View style={{backgroundColor:'transperant',height:400,width:350,position:'absolute',top:180}}>
           <TouchableOpacity><View style={{backgroundColor:'#ffffff2a',width:200,height:60,position:'absolute',left:20,top:10,position:'absolute',justifyContent:'center',alignItems:'center',borderWidth:5,borderColor:'#ffffff80',borderRadius:40}}><Text style={{fontFamily:'Kanit_400Regular',fontSize:36,color:'white'}}>+Cricket</Text></View></TouchableOpacity>
           <TouchableOpacity><View style={{backgroundColor:'#ffffff2a',width:210,height:60,position:'absolute',left:100,top:110,position:'absolute',justifyContent:'center',alignItems:'center',borderWidth:5,borderColor:'#ffffff80',borderRadius:40}}><Text style={{fontFamily:'Kanit_400Regular',fontSize:36,color:'white'}}>+Football</Text></View></TouchableOpacity>
           <TouchableOpacity><View style={{backgroundColor:'#ffffff2a',width:250,height:60,position:'absolute',left:0,top:210,position:'absolute',justifyContent:'center',alignItems:'center',borderWidth:5,borderColor:'#ffffff80',borderRadius:40}}><Text style={{fontFamily:'Kanit_400Regular',fontSize:36,color:'white'}}>+Badminton</Text></View></TouchableOpacity>
           <TouchableOpacity><View style={{backgroundColor:'#ffffff2a',width:230,height:60,position:'absolute',left:130,top:310,position:'absolute',justifyContent:'center',alignItems:'center',borderWidth:5,borderColor:'#ffffff80',borderRadius:40}}><Text style={{fontFamily:'Kanit_400Regular',fontSize:36,color:'white'}}>+Volleyball</Text></View></TouchableOpacity>
            </View>
            <TouchableOpacity
                    onPress={()=>{navigation.navigate('LangSport')}}
                    style={{opacity:1.2,backgroundColor:'#0091ff',width:300,height:60,alignItems:'center',justifyContent:'center',borderRadius:10,position:'absolute',bottom:100}}>
                        <Text style={{fontFamily:'Kanit_400Regular',fontSize:24}}>Next   </Text>
                    </TouchableOpacity>
                     
    </Background>);
}

export default LangSport;