import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Post = () => {
  return (
    <View style={{ marginBottom: 70, borderWidth: 3, borderColor: "red" }}>
      <PostHeader />
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View>
      <View>
        <Image />
        <Text>This is text uder images</Text>
      </View>
    </View>
  );
};

export default Post;
