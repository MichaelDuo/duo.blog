import {connect} from 'react-redux'
import {getResource, isResourceLoading} from 'selectors/resources'
import {loadResume} from 'actions/thunks/resume'
import {RESUME} from 'constants/resources'
import AboutMe from './AboutMe'

const mapStateToProps = (state) => {
  return {
    resume: getResource(state, RESUME),
    loading: isResourceLoading(state, RESUME)
  }
}

const mapDispatchToProps = {
  loadResume
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe)