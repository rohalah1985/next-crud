"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Update = (props) => {
  const router = useRouter();
  const [comment, setcomment] = useState(props.comment);
  const [show, setshow] = useState(false);

  const edit = (id) => {
    fetch(
      `http://localhost:5000/edit/${id}`,

      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment }),
      }
    );
    setshow(!show);
    router.refresh();
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setshow(!show)}
        className="bg-green-500 p-2 rounded"
      >
        Edit
      </button>
      {show && (
        <div className="flex gap-2 duration-700 transition-all">
          <input
            type="text"
            value={comment}
            onChange={(e) => setcomment(e.target.value)}
            className="text-black w-[20rem]"
          ></input>
          <button
            onClick={() => edit(props.id)}
            className="bg-green-500 p-2 rounded"
          >
            Applay
          </button>
        </div>
      )}
    </div>
  );
};

export default Update;
