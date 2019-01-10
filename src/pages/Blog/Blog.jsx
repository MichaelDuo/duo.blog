import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

export default class Blog extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    fetchBlog: PropTypes.func.isRequired
  }

  componentDidMount(){
    const {fetchBlog, id} = this.props
    fetchBlog(id)
  }

  render(){
    return (
      <div>
        Blog Post {this.props.id}
      </div>
    )
  }
}
