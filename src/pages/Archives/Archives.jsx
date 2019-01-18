import React from 'react'
import PropTypes from 'prop-types'

const data = [
    {
        year: 2019,
        blogs: [
            { title: 'Blog' },
            { title: 'Blog' },
            { title: 'Blog' }
        ]
    },
    {
        year: 2018,
        blogs: [
            { title: 'Blog' },
            { title: 'Blog' },
            { title: 'Blog' }
        ]
    },
    {
        year: 2017,
        blogs: [
            { title: 'Blog' },
            { title: 'Blog' },
            { title: 'Blog' }
        ]
    }
]

function YearBlogs({year, blogs}){
    return (
        <div className="uk-margin">
            <div className="uk-text-lead">
                {year}
            </div>
            <ul class="uk-list uk-list-bullet">
                {blogs.map(blog=>{
                    return (
                        <li key={blog.title}>
                            <a className="uk-link-heading">{blog.title}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

YearBlogs.propTypes = {
    year: PropTypes.number.isRequired,
    blogs: PropTypes.array.isRequired
}

export default function Archives(){
    return (
        <div>
            {data.map(year=>YearBlogs(year))}
        </div>
    )
}