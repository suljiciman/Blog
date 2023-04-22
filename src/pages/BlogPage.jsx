import BlogList from "../components/BlogList";
import Form from "../components/Form";
import React, {useState} from 'react'

const BlogPage = () => {
    const [blogs,setBlogs]= useState([])

    const onBlogCreation = (blog) =>{
        setBlogs((prevState)=> {
            return [...prevState,blog]
        })

    }
  return (
    <div className="p-20">
     <Form onBlogCreation={onBlogCreation}/>
    <BlogList blogs={blogs}/>
    </div>
  )
}

export default BlogPage


