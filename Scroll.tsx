import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

const Scroll = ({ image, title }) => {
  const [active, setActive] = useState(true);
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        borderBottomColor: active ? 2 : 0,
        borderColor: "#000",
        marginHorizontal: 15
      }}
    >
      <Image source={image} style={{ width: 40, height: 40 }}  />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Scroll;

const styles = StyleSheet.create({});
