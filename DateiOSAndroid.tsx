import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";

const DateiOSAndroid = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: '600', top: 20}}>Display Total Price</Text>
      <Switch
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{top: 20, left: 100}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: '120%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    width: '90%',
    height: 70, 
    borderWidth: 0.5,
    alignSelf: 'center',
    borderRadius: 20,
    borderColor: '#ccc',
    marginTop: 20
  },
});

export default DateiOSAndroid;
