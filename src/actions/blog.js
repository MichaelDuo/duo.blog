import {set, startLoading, stopLoading} from 'actions/resources'
import {BLOG, BLOGS} from 'constants/resources'
import {getResource} from 'selectors/resources'
import {find} from 'lodash'
import {fetch} from 'utils/network'
import fm from 'front-matter'
import showdown from 'showdown'

const converter = new showdown.Converter()

export const loadBlog = (id) => async (dispatch, getState) => {
  dispatch(startLoading(BLOG))
  const blogs = getResource(getState(), BLOGS)
  const blogInfo = find(blogs, blog => blog.id === id)
  const data = await fetch(blogInfo.url)
  const {attributes, body} = fm(data)
  const blog = {
    title: 'Title',
    body: converter.makeHtml(body),
    attributes
  }

  console.log(fm(data))

  dispatch(set(BLOG, blog))
  dispatch(stopLoading(BLOG))
}