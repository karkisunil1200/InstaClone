import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { USERS } from "../../data/users";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13, borderWidth: 2, borderColor: "yellow" }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image
              source={{
                uri: story.image,
              }}
              style={styles.story}
            />
            <Text style={{ color: "white", alignItem: "center" }}>
              {story.user.length > 11
                ? story.user.slice(0, 8).toLowerCase() + "..."
                : story.user.toLowerCase()}
            </Text>
          </View>
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
