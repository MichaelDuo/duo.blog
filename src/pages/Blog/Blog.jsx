import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Spinner from 'components/Spinner'
import dayjs from 'dayjs'

export default class Blog extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    blog: PropTypes.object,
    loadBlog: PropTypes.func.isRequired,
    loading: PropTypes.bool
  }
  
  static defaultProps = {
    blog: { },
    loading: true
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
    const date = dayjs(blog.attributes.date).format('MMM DD, YYYY')
    return (
      <div className="uk-animation-slide-bottom-small">
        <h2 className="uk-heading">{blog.title}</h2>
        <div className="uk-margin">
          <span className="uk-text-meta uk-margin-small-right">{date}</span>
          {blog.attributes.tags.map(tag=><a key="tag" className="uk-badge">#{tag}</a>)}
        </div>
        <div className="blog" dangerouslySetInnerHTML={{__html: blog.html}} />
      </div>
    )
  }
}
