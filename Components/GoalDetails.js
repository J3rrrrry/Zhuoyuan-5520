import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function GoalDetails({ navigation, route }) {
    const [warning, setWarning] = useState(false);
    function moreDetailsHandler() {
        navigation.push("Details");
      }
    function warningHandler() {
      console.log("warning");
      setWarning(true);
      navigation.setOptions({ title: "Warning!" });
    }
    useEffect(() => {
      navigation.setOptions({
        headerRight: () => {
          return (
            <Button title="Warning" color="white" onPress={warningHandler} />
          );
        },
      });
    }, []);

  return (
    <View>
      {route.params ? (
        <Text style={warning && styles.warningStyle}>
          Details of a goal with text {route.params.goalData.text} and
          id {route.params.goalData.id}
        </Text>
      ) : (
        <Text style={warning && styles.warningStyle}>More details</Text>
      )}
      <Button title="More Details" onPress={moreDetailsHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  warningStyle: {
    color: "red",
  },
});
