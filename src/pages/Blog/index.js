import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {getResource, isResourceLoading} from 'selectors/resources'
import {loadBlog} from 'actions/blog'
import {BLOG} from 'constants/resources'
import Blog from './Blog'

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.id,
    blog: getResource(state, BLOG),
    loading: isResourceLoading(state, BLOG)
  }
}

const mapDispatchToProps = {
  loadBlog: (id) => loadBlog(id)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Blog))