import { StyleSheet, Text, View, TextInput } from "react-native";

const Search = () => {
  return (
    <View
      style={{
        margin: 20,
        width: "90%",
        height: 55,
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: "rgb(150, 150, 150)",
        justifyContent: "center",
        paddingLeft: 20,
      }}
    >
      <TextInput
        placeholder="Search..."
        placeholderTextColor={"rgb(150, 150, 150)"}
        style={{ fontSize: 16 }}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
