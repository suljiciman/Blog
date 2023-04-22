import React from 'react'

const BlogItem = ({blog}) => {
  return (
    <div className="p-6 rounded-md shadow-md">
        <h1 className="text-xl font-semibold text-blue-700 ">{blog.title}</h1>
        <h3 className="mb-1 text-gray-600 italic">Posted: <span className="text-blue-700">{blog.posted.toLocaleString('en-US')}</span></h3>
        <p className="text-gray-600">{blog.description}</p>

    </div>
  )
}

export default BlogItem
