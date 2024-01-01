import * as React from "react";
import { Card } from "react-native-elements";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import DatePickerComponent from "../components/DatePickerComponent";

const DatePickerScreen = ({navigation}) => {
    return (
        <View>
            <Card containerStyle={{ width: "90%",marginVertical : 10 }} wrapperStyle={{}}>
        <Card.Title style={{ fontSize: 20, backgroundColor: '#242B2E', color: "white", fontWeight: '100',paddingVertical : 15 }}>Activity Indicator</Card.Title>
        <Card.Divider />
        <View
          style={{
            position: "relative",
            alignItems: "center",
          }}>
          <View>
            {/* Component Goes Here */}
            {/* Component should be without flex : 1 */}
            <DatePickerComponent />
          
            <Card.Divider style = {{marginTop : 20,}} />
          </View>
          
          <TouchableOpacity
          onPress={() => {navigation.navigate("ComponentWebView",{screen : "DatePickerCode" })}}>
          <Text style={{ fontSize: 20, backgroundColor: 'white' ,  }}> Source Code </Text>
          </TouchableOpacity>
        </View>
      </Card>
        </View>
    )
}

export default DatePickerScreen


