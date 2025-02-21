import React, { useState } from "react";
import Background from "./Background";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";

const LangSport = ({ navigation }) => {
  const [selectedSport, setSelectedSport] = useState(null);

  const handlePress = (sport) => {
    // Only change selection when a different option is tapped
    if (selectedSport !== sport) {
      setSelectedSport(sport);
    }
  };

  return (
    <Background>
      {/* Background Image */}
      <ImageBackground
        source={require("./asset/Volleyball.png")}
        style={{
          flex: 1,
          height: 400,
          width: 400,
          position: "absolute",
          bottom: 0,
          opacity: 0.08,
          right: 0,
          zIndex: 0,
        }}
      />
      
      {/* Title */}
      <Text
        style={{
          position: "absolute",
          color: "white",
          fontFamily: "Kanit_400Regular",
          left: 20,
          top: 150,
          fontSize: 36,
          opacity: 0.85,
        }}
      >
        Select your Sport
      </Text>

      {/* Sport Selection Buttons */}
      <View
        style={{
          backgroundColor: "transparent",
          height: 400,
          width: 280,
          position: "absolute",
          left: 35,
        }}
      >
        {/* Cricket */}
        <TouchableOpacity onPress={() => handlePress("Cricket")}>
          <View
            style={{
              backgroundColor: selectedSport === "Cricket" ? "#ffffff50" : "#ffffff2a",
              width: 200,
              height: 60,
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 5,
              borderColor: "#ffffff80",
              borderRadius: 40,
            }}
          >
            <Text
              style={{
                fontFamily: "Kanit_400Regular",
                fontSize: 36,
                color: "white",
              }}
            >
              +Cricket
            </Text>
          </View>
        </TouchableOpacity>

        {/* Football */}
        <TouchableOpacity onPress={() => handlePress("Football")}>
          <View
            style={{
              backgroundColor: selectedSport === "Football" ? "#ffffff50" : "#ffffff2a",
              width: 210,
              height: 60,
              position: "absolute",
              top: 100,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 5,
              borderColor: "#ffffff80",
              borderRadius: 40,
            }}
          >
            <Text
              style={{
                fontFamily: "Kanit_400Regular",
                fontSize: 36,
                color: "white",
              }}
            >
              +Football
            </Text>
          </View>
        </TouchableOpacity>

        {/* Badminton */}
        <TouchableOpacity onPress={() => handlePress("Badminton")}>
          <View
            style={{
              backgroundColor: selectedSport === "Badminton" ? "#ffffff50" : "#ffffff2a",
              width: 250,
              height: 60,
              position: "absolute",
              top: 200,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 5,
              borderColor: "#ffffff80",
              borderRadius: 40,
            }}
          >
            <Text
              style={{
                fontFamily: "Kanit_400Regular",
                fontSize: 36,
                color: "white",
              }}
            >
              +Badminton
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Next Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("LangSport")}
        style={{
          opacity: 1.2,
          backgroundColor: "#0091ff",
          width: 300,
          height: 60,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          position: "absolute",
          bottom: 100,
        }}
      >
        <Text
          style={{
            fontFamily: "Kanit_400Regular",
            fontSize: 24,
          }}
        >
          Next
        </Text>
      </TouchableOpacity>
    </Background>
  );
};

export default LangSport;
