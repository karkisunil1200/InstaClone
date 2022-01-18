import { USERS } from "./users";

export const POSTS = [
  {
    imageURL:
      "/Users/sunilkarki/Desktop/Insta/instaClone/data/alexey-turenkov-M_9kziUS470-unsplash.jpg",
    user: USERS[0].user,
    likes: 4442,
    caption: "First post and many to come...",
    profile_picture: USERS[0].image,
    comments: [
      { user: "kanchi", comment: "Wow your new post. " },
      { user: "hazel", comment: "you finally did it" },
    ],
  },
  {
    imageURL:
      "/Users/sunilkarki/Desktop/Insta/instaClone/data/maksym-tymchyk-KIM9ux3pgDY-unsplash.jpg",
    user: USERS[1].user,
    likes: 32,
    caption: "First post and many to come...",
    profile_picture: USERS[1].image,
    comments: [
      { user: "kanchi", comment: "Wow your new post. " },
      { user: "hazel", comment: "you finally did it" },
    ],
  },
  {
    imageURL:
      "/Users/sunilkarki/Desktop/Insta/instaClone/data/ruta-gudeliene-MkPt_FzqSkI-unsplash.jpg",
    user: USERS[2].user,
    likes: 542,
    caption: "sooo nice and wintry",
    profile_picture: USERS[2].image,
    comments: [
      { user: "kanchi", comment: "Wow your new post. " },
      { user: "hazel", comment: "you finally did it" },
    ],
  },
];
