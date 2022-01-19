import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const postFooterIcons = [
  {
    name: "Like",
    imageUrl:
      "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-like-instagram-flatart-icons-outline-flatarticons.png",
    likedImageUrl: "https://img.icons8.com/color/64/000000/filled-like.png",
  },
  {
    name: "Comment",
    imageUrl: "https://img.icons8.com/ios/50/ffffff/topic.png",
  },
  {
    name: "Share",
    imageUrl:
      "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-send-instagram-flatart-icons-outline-flatarticons.png",
  },
  {
    name: "Save",
    imageUrl:
      "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-bookmark-instagram-flatart-icons-outline-flatarticons.png",
  },
];

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 70, borderWidth: 3, borderColor: "red" }}>
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizon: 15, marginTop: 10 }}>
        <PostFooter post={post} />
        <Likes post={post} />
      </View>
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
        <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
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

const PostFooter = ({ post }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={styles.leftFooterIconsContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
    </View>

    <View>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
    </View>
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => {
  return (
    <TouchableOpacity>
      <Image style={imgStyle} source={{ uri: imgUrl }} />
    </TouchableOpacity>
  );
};

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes} likes
    </Text>
  </View>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 27,
    height: 27,
  },
  leftFooterIconsContainer: {
    flexDirection: "row",
    width: "28%%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Post;
