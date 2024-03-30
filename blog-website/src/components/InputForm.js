import React, { useState, useEffect } from "react";

export default function InputForm(props) {
  const [imageUrl, setImageUrl] = useState("");
  const [imageTitle, setImageTitle] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [editActive, setEditActive] = useState(false);

  useEffect(() => {
    if (props.editBlog && Object.keys(props.editBlog).length !== 0) {
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
    const date = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const formattedDate = `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
    const data = {
      key: editActive ? props.editBlog[0].key : Math.random(),
      date: formattedDate,
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
      <form onSubmit={dataSubmitHandler} className="p-8 flex flex-col gap-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Image Url:
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="url"
            value={imageUrl}
            onChange={urlChangeHandler}
            required
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title:
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={imageTitle}
            onChange={titleChangeHandler}
            required
          />
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Blog Description:
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={imageDescription}
            onChange={descriptionChangeHandler}
            required
          />
        </label>
        <div className="self-center">
          {editActive ? (
            <button
              type="submit"
              className="text-center w-44 bg-teal-700 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              EDIT BLOG
            </button>
          ) : (
            <button
              type="submit"
              className="text-center w-44 bg-teal-700 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            >
              POST BLOG
            </button>
          )}
        </div>{" "}
      </form>
      <hr className="mb-4" />
    </>
  );
}
