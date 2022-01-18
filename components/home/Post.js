import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 70, borderWidth: 3, borderColor: "red" }}>
      <PostHeader post={post} />
      <PostImage post={post} />
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
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={{ uri: post.profile_picture }} style={styles.story} />
        <Text style={{ color: "white", marginLeft: 5, fontWeight: "700 " }}>
          {post.user}
        </Text>
      </View>

      <Text style={{ color: "white", fontWeight: "900" }}>...</Text>
    </View>
  );
};

const PostImage = ({ post }) => {
  return (
    <View style={{ width: "100%", height: 450 }}>
      <Image
        source={{ uri: post.imageURL }}
        style={{ height: "100%", resizeMode: "cover" }}
      />
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
