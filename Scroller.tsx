import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Scroll from './Scroll'

const Scroller = () => {
  return (
    <ScrollView horizontal contentContainerStyle={{ margin: 20 }}>
      <TouchableOpacity
        style={{
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/pool.png")}
          style={{ width: 40, height: 40 }}
        />
        <Text>Amazing pools</Text>
      </TouchableOpacity>
      <Scroll
        image={{ uri: "https://cdn-icons-png.flaticon.com/512/3/3879.png" }}
        title={"Beach front"}
      />
      <Scroll
        image={{
          uri: "https://images.squarespace-cdn.com/content/v1/60cd975faad61207c700868c/1624179418794-E2IVKAXGTLTTOZJKKHN5/noun_tiny+home_1134368.png",
        }}
        title={"Tiny homes"}
      />
      <Scroll
        image={{
          uri: "https://www.iconpacks.net/icons/1/free-key-icon-920-thumb.png",
        }}
        title={"News"}
      />
      <Scroll
        image={{
          uri: "https://cdn-icons-png.flaticon.com/512/7587/7587496.png",
        }}
        title={"Windmills"}
      />
    </ScrollView>
  );
}

export default Scroller

const styles = StyleSheet.create({})