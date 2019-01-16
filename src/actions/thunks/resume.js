import {set, startLoading, stopLoading} from 'actions/resources'
import {RESUME} from 'constants/resources'
import {fetch} from 'utils/network'
import {convert} from 'utils/markdown'

const resumeUrl = '/resume/resume.md'

export const loadResume = () => async dispatch => {
  dispatch(startLoading(RESUME))
  const data = await fetch(resumeUrl)
  dispatch(set(RESUME, convert(data)))
  dispatch(stopLoading(RESUME))
}