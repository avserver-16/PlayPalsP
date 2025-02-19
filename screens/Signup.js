import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment"; 
import Background from "./Background";
import { useNavigation } from "@react-navigation/native"; 

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const navigation = useNavigation(); 

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA0-9]{2,6}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleSubmit = () => {
    if (!name || !email || !password || !dob || !gender) {
      setFormError("All fields must be filled out.");
      return;
    }

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    if (!passwordRegex.test(password)) {
      setPasswordError("Password must be at least 8 characters and include at least one letter and one number.");
      return;
    } else {
      setPasswordError("");
    }

    setFormError("");
    navigation.navigate("OtpVerification", { email, name });
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDob(moment(date).format("DD-MM-YYYY"));
    hideDatePicker();
  };

  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

        <TouchableOpacity onPress={showDatePicker} style={styles.input}>
          <Text style={styles.dateText}>
            {dob ? dob : "Select Date of Birth"}
          </Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Select Gender</Text>
        <Picker
          selectedValue={gender}
          style={styles.input}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>

        {formError ? <Text style={styles.error}>{formError}</Text> : null}

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          date={new Date()}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          maximumDate={new Date()} 
        />
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    justifyContent:'center'
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff",
    marginTop: 20,
  },
  input: {
    width: 230,
    height: 50,
    marginBottom: 18,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 8,
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  dateText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    lineHeight: 50,
  },
  error: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: "#fff",
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
