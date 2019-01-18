import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function YearBlogs({year, blogs}){
    return (
        <div className="uk-margin">
            <div className="uk-text-lead">
                {year}
            </div>
            <ul className="uk-list uk-list-bullet">
                {blogs.map(blog=>{
                    return (
                        <li key={blog.id}>
                            <Link to={`/blog/${blog.id}`} className="uk-link-heading">{blog.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

YearBlogs.propTypes = {
    year: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    blogs: PropTypes.array.isRequired
}

export default function Archives({archives}){
    return (
        <div className="uk-animation-slide-top-small">
            {archives.map(yearArchive=><YearBlogs key={yearArchive.year} year={yearArchive.year} blogs={yearArchive.blogs} />)}
        </div>
    )
}

Archives.propTypes = {
    archives: PropTypes.array.isRequired
}