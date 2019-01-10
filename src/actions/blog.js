import {set} from 'actions/resources'
import {BLOG, BLOGS} from 'constants/resources'
import {getResource} from 'selectors/resources'
import {find} from 'lodash'
import {fetch} from 'utils/network'

export const loadBlog = (id) => async (dispatch, getState) => {
  const blogs = getResource(getState(), BLOGS)
  const blogInfo = find(blogs, blog => blog.id === id)
  const data = await fetch(blogInfo.url)
  const blog = {
    title: 'Title',
    content: data
  }
  dispatch(set(BLOG, blog))
}