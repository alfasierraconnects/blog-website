import React from "react";
import BlogItem from "./BlogItem";

export default function BlogsList(props) {
  return (
    <ul className="grid grid-cols-2 gap-4 p-2">
      {props.blogsData.map((el) => (
        <BlogItem
          key={el.key}
          id={el.key}
          url={el.url}
          title={el.title}
          date={el.date}
          description={el.description}
          delete={props.deleteBlog}
          edit={props.editBlog}
        />
      ))}
    </ul>
  );
}
