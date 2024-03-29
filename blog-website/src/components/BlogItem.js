import React from "react";

export default function BlogItem(props) {
  const deleteHandler = () => {
    props.delete(props.id);
  };

  const editHandler = () => {
    props.edit(props.id);
  };

  return (
    <>
      <img src={props.url} alt={props.title} style={{ height: "250px" }} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <button onClick={deleteHandler}>DELETE BLOG</button>
      <button onClick={editHandler}>EDIT BLOG</button>
      <hr />
    </>
  );
}
