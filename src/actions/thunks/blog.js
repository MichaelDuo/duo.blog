import {set, startLoading, stopLoading} from 'actions/resources'
import {BLOG, BLOGS} from 'constants/resources'
import {getResource} from 'selectors/resources'
import {find} from 'lodash'
import {fetch} from 'utils/network'
import {convert} from 'utils/markdown'

export const loadBlog = (id) => async (dispatch, getState) => {
  dispatch(startLoading(BLOG))
  const blogs = getResource(getState(), BLOGS)
  const blogInfo = find(blogs, blog => blog.id === id)
  const data = await fetch(blogInfo.url)
  const blog = convert(data)
  dispatch(set(BLOG, blog))
  dispatch(stopLoading(BLOG))
}