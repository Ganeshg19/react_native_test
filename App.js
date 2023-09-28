import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Card } from "@rneui/themed";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const RadioButton = ({ onPress, selected, children }) => {
  return (
    <View style={styles.radioButtonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.radioButton}>
        {selected ? <View style={styles.radioButtonIcon} /> : null}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.radioButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

function HomeScreen({ navigation, onPress, selected, children }) {
  const [formData, setFormData] = useState({
    inputValue: "",
    selectedRadioButton: null,
    isChecked: true,
  });
  const [isChecked, setChecked] = React.useState(false);
  const [isLiked, setIsLiked] = useState([
    { id: 1, value: true, name: "Male", selected: false },
    { id: 2, value: false, name: "Female", selected: false },
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const [radio, setRadio] = React.useState("");

  const handleButtonPress = () => {
    // return Alert.alert(`Thank You ${inputValue}`);
    const { inputValue, selectedRadioButton, isChecked } = formData;

    console.log("Input Value:", inputValue);
    console.log(
      "Selected Radio Button:",
      selectedRadioButton?.name || "None selected"
    );
    console.log("Checkbox Value:", isChecked);

    alert(
      `Name: ${inputValue}\n` +
        `Gender: ${selectedRadioButton?.name || "None selected"}\n` +
        `Agree to terms and policy: ${isChecked}`
    );
    console.log(inputValue);
  };
  const onRadioBtnClick = (item) => {
    let updatedState = isLiked.map((isLikedItem) =>
      isLikedItem.id === item.id
        ? { ...isLikedItem, selected: true }
        : { ...isLikedItem, selected: false }
    );
    setIsLiked(updatedState);
    setFormData({
      ...formData,
      selectedRadioButton: item,
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Home Screen</Text>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: "150px",
        }}
      >
        <View style={styles.header}>
          <Text style={styles.text}>Name</Text>
        </View>
        <TextInput
          style={{
            // height: 40,
            // width: 200,
            borderColor: "gray",
            borderWidth: 1,
            padding: 5,
            // marginBottom: 5,
            // padding: 5,
          }}
          onChangeText={(text) => {
            setInputValue(text);
            setFormData({
              ...formData,
              inputValue: text,
            });
          }}
          value={formData.inputValue}
          placeholder="Enter your name"
          placeholderTextColor="grey"
        />
      </View>
      <View
        style={{
          display: "flex",
          marginTop: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.header}>
          <Text style={styles.text}>Gender</Text>
        </View>
        <View
          style={{
            // height: "350px",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "left",
            alignItems: "left",
            // width: "100%",
            gap: 5,
            // marginLeft: "0px",
            // backgroundColor: "grey",
            // marginTop: "350px",
          }}
        >
          {isLiked.map((item) => (
            <RadioButton
              onPress={() => {
                onRadioBtnClick(item);
                setRadio(item.name);
                console.log(item.name);
              }}
              // selected={item === formData.selectedRadioButton}
              selected={item.selected}
              key={item.id}
            >
              {item.name}
            </RadioButton>
          ))}
        </View>
      </View>
      <View
        style={{
          height: "150px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          // backgroundColor: "grey",
          // marginTop: "350px",
        }}
      >
        <Checkbox
          style={{ margin: 15 }}
          value={!isChecked}
          onValueChange={(e) => {
            setChecked(!isChecked);
            // console.log(e);
            setFormData({
              ...formData,
              isChecked,
            });
          }}
          // onPress={() => setChecked(false)}
        />
        <Text>I agree to terms and policy.</Text>
      </View>

      {/* <View>
        <WebView
          source={{
            uri: "https://www.google.com/?gws_rd=cr,ssl&ei=SICcV9_EFqqk6ASA3ZaABA#q=tutorialspoint",
          }}
        />
      </View> */}

      <View
        style={{
          marginBottom: 15,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          title="Submit"
          onPress={handleButtonPress}
          // onPress={() => {
          //   console.log("Submitted");
          //   return alert(
          //     `Thank You ${inputValue} ` +
          //       ` , Radio value is ${radio}` +
          //       ` and ` +
          //       `CheckBox Value is ${isChecked} `
          //   );
          // }}
        />
      </View>
      <View
        style={{
          marginBottom: 15,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bottom: 0,
        }}
      >
        <Button
          style={{ width: 5 }}
          onPress={() => navigation.navigate("Form")}
          title="Go to Form"
        />
      </View>
    </View>
  );
}
function Form({ navigation }) {
  const [count, setCount] = React.useState(0);
  // const onPress = () => setCount((prevCount) => prevCount + 1);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Form Screen</Text>
      {/* <ScrollView horizontal style={{ display: "flex", flexDirection: "row" }}>
        <Text>Form Screen</Text>
        <Text>Form Screen</Text>
        <Text>Form Screen</Text>
        <Text>Form Screen</Text>
        <Text>Form Screen</Text>
      </ScrollView> */}
      <View>
        <Text
          style={{
            color: "orange",
            padding: 5,
            marginBottom: 15,
          }}
        >
          {count}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          setCount((prevCount) => prevCount + 1);
          console.log(count);
        }}
      >
        <Text style={styles.button}>Click Here</Text>
      </TouchableOpacity>
      <Button onPress={() => navigation.navigate("Home")} title="Go to Form" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          // options={{ title: "Overview" }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Form"
          // options={{ title: "Form Submission" }}
          component={Form}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
    height: "auto",
  },
  header: {
    padding: 20,
    height: "auto",
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    width: "100%",
    height: "auto",
    textAlign: "left",
    justifyContent: "start",
    // color: "white",
  },
  radioButtonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: "#50C878",
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 16,
  },
  // text: {
  //   lineHeight: 30,
  //   fontSize: 20,
  //   // marginVertical: 5,
  // },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    color: "white",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    // color: "white",
  },
});

export default App;