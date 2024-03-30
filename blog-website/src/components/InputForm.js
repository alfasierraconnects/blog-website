import React, { useState, useEffect } from "react";

export default function InputForm(props) {
  const [imageUrl, setImageUrl] = useState("");
  const [imageTitle, setImageTitle] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [editActive, setEditActive] = useState(false);

  useEffect(() => {
    if (props.editBlog && Object.keys(props.editBlog).length !== 0) {
      console.log(props.editBlog[0]);
      setImageUrl(props.editBlog[0].url);
      setImageTitle(props.editBlog[0].title);
      setImageDescription(props.editBlog[0].description);
      setEditActive(true);
    }
  }, [props.editBlog]);

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
      key: editActive ? props.editBlog[0].key : Math.random(),
      url: imageUrl,
      title: imageTitle,
      description: imageDescription,
    };
    if (editActive) {
      props.sendEditedDataToApp(data);
      setEditActive(false);
    } else {
      props.sendDataToApp(data);
    }
    setImageUrl("");
    setImageTitle("");
    setImageDescription("");
  };

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
        {editActive ? (
          <button type="submit">EDIT BLOG</button>
        ) : (
          <button type="submit">POST BLOG</button>
        )}
      </form>
      <hr />
    </>
  );
}
