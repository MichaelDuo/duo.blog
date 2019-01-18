import {connect} from 'react-redux'
import Archives from './Archives'
import getArchives from 'selectors/getArchives'

const mapStateToProps = (state) => {
  return {
    archives: getArchives(state)
  }
}

export default connect(mapStateToProps)(Archives)