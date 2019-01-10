import axios from 'axios'

export const fetch = async (url, config) => {
  let response
  try{
    response = await axios.get(url, config)
  } catch(err) {
    throw err
  }
  return response.data
}