import {BLOGS} from 'constants/resources'
import Blog from './Blog'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {getResource} from 'selectors/resources'

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.match.params.id,
    blogs: getResource(state, BLOGS)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBlog: (id) => {
      console.log('Fetch Blog: ', id)
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Blog))