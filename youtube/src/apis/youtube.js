import axios from 'axios'
const KEY = 'AIzaSyBtfUYqbc5-6ZxIihvNYnMObo7ORkAFkrA'


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }

})