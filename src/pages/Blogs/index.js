import {connect} from 'react-redux'
import {loadBlogs} from 'actions/blogs'
import {BLOGS} from 'constants/resources'
import Blogs from './Blogs'
import {getResource} from 'selectors/resources'

const mapStateToProps = (state) => {
    return {
        blogs: getResource(state, BLOGS) || []
    }
}

const mapDispatchToProps = {
    loadBlogs
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs)
