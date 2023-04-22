import React from 'react'
import BlogItem from './BlogItem'

const BlogList = () => {
  return (
    <div className="max-w-md m-auto mt-10 flex flex-col gap-6">
       <BlogItem/>
       <BlogItem/>
       <BlogItem/>
    </div>
  )
}

export default BlogList

