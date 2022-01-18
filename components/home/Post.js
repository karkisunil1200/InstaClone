import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 70, borderWidth: 3, borderColor: "red" }}>
      <PostHeader post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        alignIItems: "center",
      }}
    >
      <View>
        <Image source={{ uri: post.profile_picture }} style={styles.story} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
});

export default Post;
