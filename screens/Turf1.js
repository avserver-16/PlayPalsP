import React, { useState } from 'react';
import BG2 from './BG2';
import { View, ScrollView, TouchableOpacity, Text, TextInput, ImageBackground } from 'react-native';


const Turf1 = () => {
    const today = new Date();
    const [selectedIndex, setSelectedIndex] = useState(null);
    return (
        <BG2>
            {/* Date Scroll Section */}
            <View style={{ backgroundColor: 'transparent', height: 81, justifyContent: 'center', top: 56, position: 'absolute' }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexDirection: 'row', left: 5, backgroundColor: 'transparent', height: 81 }}
                style={{ width: 323, borderRadius: 20, height: 81 }}
            >
                {[...Array(20)].map((_, index) => {
                    const date = new Date();
                    date.setDate(today.getDate() + index);
                    const isSelected = selectedIndex === index;

                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setSelectedIndex(index)}
                            style={{
                                height: 80,
                                width: 60,
                                marginRight: 20,
                                backgroundColor: isSelected ? '#423E3EB2' : 'black', // Change color on selection
                                borderRadius: 15,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Text style={{ fontSize: 32, color: 'white', fontFamily: 'Kanit_400Regular' }}>
                                {date.getDate()}
                            </Text>
                            <Text style={{ fontSize: 20, color: 'white', fontFamily: 'Kanit_400Regular' }}>
                                {date.toLocaleString('en-US', { month: 'short' })}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>

            {/* Search and Filter Section */}
            <View style={{ height: 61, width: 313, backgroundColor: 'transparent', top: 172, position: 'relative', borderRadius: 50, borderWidth: 1, borderColor: '#B8F4AA' }}>
                <TextInput style={{ height: '100%', width: '100%', fontSize: 20, paddingLeft: 20 }} placeholder='Search' placeholderTextColor={'#FFFFFF'} />
                <TouchableOpacity style={{ width: 112, height: 43, backgroundColor: '#B8F4AA', borderRadius: 30, alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 10, top: 7.5 }}>
                    <Text style={{ fontSize: 20 }}>Filter</Text>
                </TouchableOpacity>
            </View>

            {/* Turf List Section */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexDirection: 'column', alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}
                style={{marginTop:200}}
            >
                {[1, 2, 3, 4,5,6,7,8].map((_, index) => (
                    <View
                        key={index}
                        style={{
                            height: 150,
                            width: 308,
                            backgroundColor: 'transparent',
                            borderBottomWidth: 2,
                            borderColor: '#FFFFFF',
                            marginBottom: 30, // Added spacing between items
                        }}
                    >
                        <View style={{alignItems:'center',backgroundColor:'white'}}>
                            <ImageBackground
                            source={require("./asset/TurfFront.png")}
                            style={{
                                flex: 1,
                                height: 100,
                                width: 150,
                                position: "absolute",
                                bottom: 0,
                                opacity: 1,
                                left: 20,
                                top: 20,
                            }}
                        ></ImageBackground>
                        <TouchableOpacity style={{zIndex:2, width: 112, height: 43, backgroundColor: 'transparent', borderRadius: 10, alignItems: 'center', justifyContent: 'center', position: 'absolute', left: 40, top: 50,borderWidth:1,borderColor:'white' }}>
                        <Text style={{ fontSize: 20,color:'white' }}>Book</Text>
                    </TouchableOpacity></View>
                        <View style={{ left: 190, top: 20 }}>
                            <Text style={{ fontSize: 20, fontWeight: '600', color: '#FFFFFF', marginBottom: 5 }}>Nsf Turf</Text>
                            <Text style={{ fontSize: 15, fontWeight: '400', color: '#FFFFFF', marginBottom: 3 }}>Satya Nagar</Text>
                            <Text style={{ fontSize: 15, fontWeight: '400', color: '#FFFFFF', marginBottom: 3 }}>9.00pm-11.0pm</Text>
                            <Text style={{ fontSize: 15, fontWeight: '400', color: '#FFFFFF', marginBottom: 3 }}>12 max</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </BG2>
    );
}

export default Turf1;

