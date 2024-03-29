import React, { useState } from "react";

export default function InputForm(props) {
  const [imageUrl, setImageUrl] = useState("");
  const [imageTitle, setImageTitle] = useState("");
  const [imageDescription, setImageDescription] = useState("");

  const urlChangeHandler = (event) => {
    setImageUrl(event.target.value);
  };
  const titleChangeHandler = (event) => {
    setImageTitle(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setImageDescription(event.target.value);
  };

  const dataSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      key: Math.random(),
      url: imageUrl,
      title: imageTitle,
      description: imageDescription,
    };
    props.sendDataToApp(data);
    setImageUrl("");
    setImageTitle("");
    setImageDescription("");
  };

  if (props.editBlog) {
    console.log(props.blogToEdit);
    // setImageUrl(props.editBlog.url);
    // setImageTitle(props.editBlog.title);
    // setImageDescription(props.editBlog.description);
  }

  return (
    <>
      <form onSubmit={dataSubmitHandler}>
        <label>
          Image Url:
          <input
            type="url"
            value={imageUrl}
            onChange={urlChangeHandler}
            required
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            value={imageTitle}
            onChange={titleChangeHandler}
            required
          />
        </label>
        <label>
          Blog Description:
          <input
            type="text"
            value={imageDescription}
            onChange={descriptionChangeHandler}
            required
          />
        </label>
        <button type="submit">POST BLOG</button>
      </form>
      <hr />
    </>
  );
}
