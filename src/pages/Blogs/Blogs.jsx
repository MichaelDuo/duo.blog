import React, {PureComponent} from 'react'
import BlogList from 'components/BlogList'
import PropTypes from 'prop-types'

export default class Blogs extends PureComponent {
    static propTypes = {
        blogs: PropTypes.array.isRequired,
        loadBlogs: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.loadBlogs()
    }

    render(){
        const {blogs} = this.props
        return (
            <div className="uk-animation-slide-top-small">
                <BlogList blogs={blogs}/>
            </div>
        )
    }
} 
