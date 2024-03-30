import React from "react";

export default function BlogItem(props) {
  const deleteHandler = () => {
    props.delete(props.id);
  };

  const editHandler = () => {
    props.edit(props.id);
  };

  return (
    <div className="p-2 flex flex-col items-center">
      <img
        src={props.url}
        alt={props.title}
        className="object-cover h-64 w-full rounded-md shadow-md"
      />
      <h3 className="text-xl font-semibold text-gray-800">{props.title}</h3>
      <p>{props.date}</p>
      <p className="text-gray-600">{props.description}</p>
      <div className="flex gap-4 mt-4">
        <button
          onClick={deleteHandler}
          className="bg-red-600 hover:bg-red-500 text-white w-32 py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        >
          DELETE BLOG
        </button>
        <button
          onClick={editHandler}
          className="bg-teal-600 hover:bg-teal-500 text-white w-32 py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        >
          EDIT BLOG
        </button>
      </div>

      <hr className="my-4" />
    </div>
  );
}
