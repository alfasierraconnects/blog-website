import React, { useState } from "react";
import InputForm from "./components/InputForm";
import BlogsList from "./components/BlogsList";

const dummy_data = [
  {
    key: 1,
    url: "https://images.unsplash.com/photo-1711638241167-796a782bd3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
    title: "First Blog Post",
    description: "This is the description of the first blog post.",
  },
  {
    key: 2,
    url: "https://images.unsplash.com/photo-1682685797303-0ad51eb23e13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
    title: "Second Blog Post",
    description: "This is the description of the second blog post.",
  },
  {
    key: 3,
    url: "https://plus.unsplash.com/premium_photo-1711477326347-721652a2a763?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
    title: "Third Blog Post",
    description: "This is the description of the third blog post.",
  },
];

function App() {
  const [blogsData, setBlogsData] = useState(dummy_data);
  const [totalBlogs, setTotalBlogs] = useState(blogsData.length);
  const [editBlog, setEditBlog] = useState();

  const inputDataHandler = (data) => {
    console.log(data);
    setBlogsData((prevState) => {
      return [...prevState, data];
    });
    setTotalBlogs(blogsData.length);
  };

  const deleteBlogHandler = (id) => {
    console.log(id);
    const updatedBlogsData = blogsData.filter((el) => {
      return el.key !== id;
    });
    setBlogsData(updatedBlogsData);
    setTotalBlogs(updatedBlogsData.length);
  };

  const editBlogHandler = (id) => {
    // console.log(id);
    const blogToEdit = blogsData.filter((el) => el.key === id);
    console.log(blogToEdit);
    setEditBlog(blogToEdit);
  };

  return (
    <>
      <h1>Blog Website</h1>
      <h3>Total Blogs: {totalBlogs}</h3>
      <InputForm sendDataToApp={inputDataHandler} editBlog={editBlog} />
      <BlogsList
        blogsData={blogsData}
        deleteBlog={deleteBlogHandler}
        editBlog={editBlogHandler}
      />
    </>
  );
}

export default App;
