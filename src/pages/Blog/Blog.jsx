import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import showdown from 'showdown'
import Spinner from 'components/Spinner'

const converter = new showdown.Converter()

export default class Blog extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    blog: PropTypes.object,
    loadBlog: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  }
  
  static defaultProps = {
    blog: { }
  }

  componentDidMount(){
    const {loadBlog, id} = this.props
    loadBlog(id)
  }

  render(){
    const {blog, loading} = this.props
    if(loading){
      return <Spinner/>
    }
    const {content} = blog
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
