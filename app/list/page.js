import Update from "@/components/update"
import Del from "@/components/button"



async function Get(){
            
  const res=await fetch("http://localhost:5000/list" ,{cache:'no-store'})
    const data=res.json()
    return data
}

export const metadata ={
    title: "roli",
    description : " list page "
}

const page =async() => {
    const data=await Get()
    return (
        <div>
         {
            data.map((n)=>(
                <li key={n._id} className="flex justify-between  border border-black bg-indigo-400 text-white rounded-lg  p-4  items-center mx-20 mt-5">
             <p>{n.comment}</p> 
             <div className="flex justify-center items-center gap-3">
             <Del id={n._id}  />
              <Update id={n._id} comment={n.comment} />
              

             </div>
             

                </li>
            
            ))
     
         }
        </div>
    );
}

export default page;