import {set} from 'actions/resources'
import {BLOGS} from 'constants/resources'

const blogs = process.env.BLOGS

export const loadBlogs = () => dispatch => {
  dispatch(set(BLOGS, blogs))
}