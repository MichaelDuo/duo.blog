import {connect} from 'react-redux'
import {set} from 'actions/resources'
import {BLOGS} from 'constants/resources'
import Blogs from './Blogs'
import {getResource} from 'selectors/resources'

const blogs = process.env.BLOGS

const mapStateToProps = (state) => {
    return {
        blogs: getResource(state, BLOGS) || []
    }
}

const mapDispatchToProps = {
    loadBlogs: () => set(BLOGS)(blogs)
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs)
