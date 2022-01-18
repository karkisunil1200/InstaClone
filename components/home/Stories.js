import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
// import { USERS } from "../../data/users";

const USERS = [
  {
    user: "karkisunil",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
  },
  {
    user: "karkisunil",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
  },
  {
    user: "karkisunil",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
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
    width: 80,
    height: 80,
    borderColor: "red",
    borderWidth: 2,
  },
});

export default Stories;
