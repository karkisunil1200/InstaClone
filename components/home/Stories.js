import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
// import { USERS } from "../../data/users";

const USERS = [
  {
    user: "sunil",
    image:
      "https://img.icons8.com/external-linector-lineal-color-linector/64/000000/external-avatar-man-avatar-linector-lineal-color-linector-5.png",
  },

  {
    user: "Subash",
    image:
      "https://img.icons8.com/external-linector-lineal-color-linector/64/000000/external-avatar-man-avatar-linector-lineal-color-linector-6.png",
  },
  {
    user: "Nita",
    image: "https://img.icons8.com/color-glass/48/000000/avatar.png",
  },
  {
    user: "Hazel",
    image:
      "https://img.icons8.com/external-color-for-better-life-royyan-wijaya/64/000000/external-avatar-avatar-i-color-for-better-life-royyan-wijaya-6.png",
  },
  {
    user: "Myra",
    image:
      "https://img.icons8.com/external-color-for-better-life-royyan-wijaya/64/000000/external-avatar-avatar-i-color-for-better-life-royyan-wijaya.png",
  },
];

const Stories = () => {
  return (
    <View style={{ marginBottom: 13, borderWidth: 2, borderColor: "yellow" }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <Image
            source={{
              uri: story.image,
            }}
            style={styles.story}
          />
        ))}
      </ScrollView>
      <Text style={{ color: "white" }}>Stories</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
});

export default Stories;
