import React, { useState } from "react";
import InputForm from "./components/InputForm";
import BlogsList from "./components/BlogsList";
import dummy_data from "./components/data";

function App() {
  const [blogsData, setBlogsData] = useState(dummy_data);
  const [totalBlogs, setTotalBlogs] = useState(blogsData.length);
  const [editBlog, setEditBlog] = useState({});

  const inputDataHandler = (data) => {
    console.log(data);
    setBlogsData((prevState) => {
      return [...prevState, data];
    });
    setTotalBlogs(blogsData.length);
  };

  const editedDataHandler = (editedData) => {
    console.log(editedData);
    const newList = blogsData.map((el) => {
      return el.key === editedData.key ? editedData : el;
    });
    console.log(newList);
    setBlogsData(newList);
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
    const blogToEdit = blogsData.filter((el) => el.key === id);
    console.log(blogToEdit);
    setEditBlog(blogToEdit);
  };

  return (
    <div className="bg-gradient-to-tr from-cyan-50 to-fuchsia-100">
      <h1 className="text-4xl font-bold text-center p-4 text-teal-800">
        BlogPulse
      </h1>
      <h3 className="text-xl font-semibold text-center">
        Total Blogs: {totalBlogs}
      </h3>
      <InputForm
        sendDataToApp={inputDataHandler}
        editBlog={editBlog}
        sendEditedDataToApp={editedDataHandler}
      />
      <BlogsList
        blogsData={blogsData}
        deleteBlog={deleteBlogHandler}
        editBlog={editBlogHandler}
      />
    </div>
  );
}

export default App;
