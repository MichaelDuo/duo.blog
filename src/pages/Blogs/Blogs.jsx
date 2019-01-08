import React from 'react'
import BlogList from 'components/BlogList'

const blogs = process.env.BLOGS

export default function Blogs(){
    return (
        <div>
            <BlogList blogs={blogs}/>
        </div>
    )
}