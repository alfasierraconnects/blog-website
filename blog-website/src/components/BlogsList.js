import React from "react";
import BlogItem from "./BlogItem";

export default function BlogsList(props) {
  return (
    <ul>
      {props.blogsData.map((el) => (
        <BlogItem
          key={el.key}
          id={el.key}
          url={el.url}
          title={el.title}
          description={el.description}
          delete={props.deleteBlog}
          edit={props.editBlog}
        />
      ))}
    </ul>
  );
}
