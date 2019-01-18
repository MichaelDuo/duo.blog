import {getResource} from './resources'
import {BLOGS} from 'constants/resources'
import {groupBy} from 'lodash'
import dayjs from 'dayjs'

export default function getArchives(state){
  const blogs = getResource(state, BLOGS)
  const blogsGroupByYear = groupBy(blogs, blog=>dayjs(blog.attributes.date).year())
  const sortedYears = Object.keys(blogsGroupByYear).sort().reverse()
  return sortedYears.map(year => ({
    year,
    blogs: blogsGroupByYear[year]
  }))
}