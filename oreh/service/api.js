import axios from 'axios'

const baseUrl = 'http://192.168.10.100:3000'
const subUrl = {
  personal_info: '/info',
  record: '/record',
  rating: '/rating',
}

export const axios_post = async (url, sendData) => {
  try {
    const response = await axios.post(`${baseUrl}${subUrl[url]}`, sendData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response
  } catch (err) {
    console.log('post통신에러: ' + err)
  }
}

export const axios_get = async (url, sendData) => {
  try {
    return (response = await axios.get(
      `${baseUrl}${subUrl[url]}`,
      { params: sendData },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    ))
  } catch (err) {
    console.log('get통신에러 : ' + err)
  }
}
