# Minimal Blog Platform
A full-stack blog application built with **Node.js**, **Express**, and **EJS**, implementing **RESTful API routes** for managing blog posts. This app allows users to create, view, edit, and delete blog posts dynamically with a clean and professional blue-themed UI.

# Features

-  Create new blog posts
-  View individual blog posts
-  Edit existing posts
-  Delete posts
-  Filter blogs by individual users
-  User-based blog segregation
-  Clean UI with professional blue-themed CSS

# Tech Stack

- HTML 
- CSS
- EJS
- Node.js
- Express.js |

blog-project/
│
├── public/
│ └── style.css # All styling files
│
├── views/
│ ├── home.ejs # All blogs page
│ ├── new.ejs # Create blog form
│ ├── show.ejs # View individual blog
│ ├── edit.ejs # Edit blog form
│ └── blogs_by_user.ejs# Filtered blogs by user
│
├── index.js # Main Express server
├── package.json # Node dependencies

# Installation & Setup

1. Clone the Repository
   ```bash
   git clone https://github.com/yourusername/blog-project.git
   cd blog-project
2. Install Dependencies
   npm install
3. Run the App
   node index.js
4. Visit
http://localhost:8080/blogs
