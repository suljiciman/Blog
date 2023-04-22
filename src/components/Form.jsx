import React from 'react'

const Form = () => { 
  return ( 
   <form className="max-w-md m-auto p-6 rounded-md shadow-md flex flex-col">
    <h1 className="text-center text-xl text-gray-900">Add New Blog</h1>
    <label className="text-gray-600 mb-1 ">Title</label>
    <input type="text" className="py-2 px-1 mb-4 rounded-md border border-blue-700 outline-blue-700"/>
    <label className="text-gray-600 mb-1">Description</label>
    <textarea className="py-2 px-1 mb-4 h-40 overflow-auto rounded-md border border-blue-700 outline-blue-700"></textarea>
    <button className="mt-6 py-2 rounded bg-blue-700 text-white  font-semibold hover:bg-blue-900 transition outline-blue-800">Add Blog</button>
   </form>
  )
}

export default Form;

