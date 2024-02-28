"use client"

import { useRouter } from "next/navigation";
import {useState} from "react"

const Add = () => {
  const router=useRouter()

    const[comment,setcomment]=useState("")

    const PostData=()=>{
    fetch("http://localhost:5000/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({comment })
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response from the backend
            alert(`saved ${comment}`)
            setcomment("")
          router.refresh()
          })
          .catch((error) => {
            console.error("Error:", error);
          });

    }
   
  return (
    
    <div >
      <div className=" flex justify-center items-center gap-10 border mt-5 mx-12 bg-violet-500 h-[8rem] p-4 rounded text-white ">
        <div>
          <input
            type="text"
            value={comment}
            className="sm:w-[5rem] md:w-[20rem] lg:w-[48rem] h-[4rem] text-black rounded p-2"
            onChange={(e)=> setcomment(e.target.value)}
          />
        </div>

        <div>
          <button onClick={()=> PostData()} className="bg-green-400 p-2  rounded-lg h-[4rem] w-[6rem] hover:bg-green-600 duration-500 transition-all">
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
