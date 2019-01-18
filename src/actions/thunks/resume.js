import {set, startLoading, stopLoading} from 'actions/resources'
import {RESUME} from 'constants/resources'
import {fetch} from 'utils/network'
import marked from 'marked'

const resumeUrl = '/resume/resume.md'

export const loadResume = () => async dispatch => {
  dispatch(startLoading(RESUME))
  const data = await fetch(resumeUrl)
  dispatch(set(RESUME, { html: marked(data) }))
  dispatch(stopLoading(RESUME))
}