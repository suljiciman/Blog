import React,{ useState } from 'react'

const Form = ({onBlogCreation}) => { 
    const [enteredTitle,setEnteredTitle] = useState("");

    const[enteredDescription,setEnteredDescription] = useState("");

    const submitFormHandler = (e) =>{
        e.preventDefault()
        const blog={
            id: Math.random().toString(),
            title: enteredTitle,
            description: enteredDescription,
            posted: new Date(),
        
        }
    onBlogCreation(blog);
    setEnteredDescription("");
    setEnteredTitle("");
    }

  return ( 
   <form onSubmit={submitFormHandler}
   className="max-w-md m-auto p-6 rounded-md shadow-md flex flex-col">
    <h1 className="text-center text-xl text-gray-900">Add New Blog</h1>
    <label className="text-gray-600 mb-1 ">Title</label>
    <input type="text" className="py-2 px-1 mb-4 rounded-md border border-blue-700 outline-blue-700"
    value={enteredTitle}
    onChange={(e) => setEnteredTitle(e.target.value)}/>
    <label className="text-gray-600 mb-1">Description</label>
    <textarea 
    className="py-2 px-1 mb-4 h-40 overflow-auto rounded-md border border-blue-700 outline-blue-700"
    value={enteredDescription}
    onChange={(e) => setEnteredDescription(e.target.value)}></textarea>
    <button className="mt-6 py-2 rounded bg-blue-700 text-white  font-semibold hover:bg-blue-900 transition outline-blue-800">Add Blog</button>
   </form>
  )
}

export default Form;

