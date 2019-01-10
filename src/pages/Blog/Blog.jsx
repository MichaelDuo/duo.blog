import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import showdown from 'showdown'

const converter = new showdown.Converter()

export default class Blog extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    blog: PropTypes.object,
    loadBlog: PropTypes.func.isRequired
  }
  
  static defaultProps = {
    blog: { }
  }

  componentDidMount(){
    const {loadBlog, id} = this.props
    loadBlog(id)
  }

  render(){
    const content = this.props.blog.content
    const contentHtml = converter.makeHtml(content)
    return (
      <div>
        <div 
          className="blog-post" 
          dangerouslySetInnerHTML={{__html: contentHtml}}
        />
      </div>
    )
  }
}
