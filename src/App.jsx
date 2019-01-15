import React, {PureComponent} from 'react';
import './styles/App.css';
import Pages from 'pages'
import { HashRouter as Router } from 'react-router-dom'
import {connect} from 'react-redux'
import {loadBlogs} from 'actions/thunks/blogs'
import PropTypes from 'prop-types'

const mapDispatchToProps = {
  loadBlogs
}
class App extends PureComponent {
  static propTypes = {
    loadBlogs: PropTypes.func.isRequired
  }

  componentWillMount(){
    this.props.loadBlogs()
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Pages />
        </div>
      </Router>
    )
  }
}

export default connect(null, mapDispatchToProps)(App)
