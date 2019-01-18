import {connect} from 'react-redux'
import Archives from './Archives'

const mapStateToProps = (state) => {
  return {
    blogsByYear: []
  }
}

export default connect(mapStateToProps)(Archives)