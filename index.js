const express = require("express");
const app = express();
const port = 8080;

const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.listen(port, () => {
  console.log("Listening to port : 8080");
});

let posts = [
  {
    id: uuidv4(),
    userId: "u1",
    username: "Omkar",
    title: "Starting with Node.js",
    content: "Today I learned about Express.js and routes. REST APIs are fun!",
    createdAt: "2025-06-11"
  },
  {
    id: uuidv4(),
    userId: "u2",
    username: "Aditya",
    title: "Frontend vs Backend",
    content: "I love designing interfaces, but backend gives me control over logic.",
    createdAt: "2025-06-10"
  },
  {
    id: uuidv4(),
    userId: "u3",
    username: "Vishal",
    title: "Understanding REST",
    content: "GET, POST, PUT, DELETE... REST is a powerful architectural style!",
    createdAt: "2025-06-09"
  },
  {
    id: uuidv4(),
    userId: "u4",
    username: "Riya",
    title: "CSS is underrated",
    content: "CSS isn’t just pretty colors. It’s powerful and expressive.",
    createdAt: "2025-06-08"
  }
];

// Home page: All Blogs
app.get("/blogs", (req, res) => {
  res.render("home", { posts });
});

// New Blog Form
app.get("/blogs/:username/:id/new", (req, res) => {
  const { username, id } = req.params;
  res.render("new", { username, id });
});

// Route to view individual blog
app.get("/blogs/:id", (req, res) => {
  const { id } = req.params;
  const blog = posts.find((p) => p.id === id);
  if (!blog) return res.send("Post not found");
  res.render("show", { blog });
});

// Create Blog
app.post("/blogs", (req, res) => {
  const { title, content, createdAt, username, userId } = req.body;
  posts.push({
    id: uuidv4(),
    title,
    content,
    createdAt,
    username,
    userId
  });
  res.redirect("/blogs");
});

// Delete Blog
app.delete("/blogs/:id", (req, res) => {
  const { id } = req.params;
  posts = posts.filter((p) => p.id !== id);
  res.redirect("/blogs");
});

// Edit Blog Form
app.get("/blogs/:id/edit", (req, res) => {
  const { id } = req.params;
  const blog = posts.find((p) => p.id === id);
  res.render("edit", { blog });
});

// Update Blog
app.patch("/blogs/:id", (req, res) => {
  const { id } = req.params;
  const { title, content, createdAt } = req.body;
  const blog = posts.find((p) => p.id === id);
  if (blog) {
    blog.title = title;
    blog.content = content;
    blog.createdAt = createdAt;
  }
  res.redirect("/blogs");
});

// Filter blogs by user
app.get("/blogs/user/:id", (req, res) => {
  const { id } = req.params;
  const userBlogs = posts.filter((p) => p.id === id);
  const username = userBlogs[0]?.username || "User";
  res.render("blogs_by_user", { userBlogs, id, username });
});

