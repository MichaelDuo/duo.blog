import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function getBlogListItem(blog){
    const blogUrl = `/blog/${blog.id}`
    return (
        <div className="uk-margin-top uk-animation-slide-top-small" key={blog.id}>
            <h3 className="uk-heading-bullet">
                <Link to={blogUrl} className="uk-link-text">
                    {blog.title}
                </Link>
            </h3>
            <div className="uk-margin-left">
                <div className="uk-margin-bottom">
                    <div className="uk-visible@m">
                        <Link to={blogUrl} className="uk-link-reset uk-text-muted">
                            {blog.preview.slice(0, 200)}...
                        </Link>
                    </div>
                    <div className="uk-hidden@m">
                        <Link to={blogUrl} className="uk-link-reset uk-text-muted">
                            {blog.preview.slice(0, 100)}...
                        </Link>
                    </div>
                </div>
                <Link to={blogUrl}>Read more</Link>
            </div>
            <hr/>
        </div>
    )
}

export default function BlogList({blogs}){
    return (
        <div>
            {blogs.map(getBlogListItem)}
        </div>
    )
}

BlogList.propTypes = {
    blogs: PropTypes.array
}

BlogList.defaultProps = {
    blogs: []
}