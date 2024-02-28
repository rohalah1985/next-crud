"use client"

import { useRouter } from "next/navigation"



const Del = (props) => {

    const router= useRouter()

    const delid=(id)=>{
        const result= confirm('are you sure?')
        if(result)
        {
            fetch(`http://localhost:5000/del/${id}`, {
                method : "DELETE",
    
            }
            )
    
            router.refresh()
    
        }
        
        }

 
    return (
        <div>
            <button onClick={()=> delid(props.id)} className="bg-rose-600 text-white p-2 rounded">Del</button>
        </div>
    );
}

export default Del;