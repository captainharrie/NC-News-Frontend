import axios from "axios";
const baseURL = axios.create({ baseURL: "https://htpncnews.onrender.com/api" });

export function fetchArticles(queries) {
  return baseURL
    .get("/articles", { params: queries })
    .then((response) => response.data.articles);
}

export function fetchSingleArticle(article_id) {
  return baseURL
    .get("/articles/" + article_id)
    .then((response) => response.data.article);
}

export function fetchComments(article_id) {
  return baseURL
    .get("/articles/" + article_id + "/comments")
    .then((response) => response.data.comments);
}

export function fetchUserInfo(username) {
  return baseURL
    .get("/users/" + username)
    .then((response) => response.data.user);
}
