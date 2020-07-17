
import axios from 'axios';
const KEY='AIzaSyD8yBhF7s4MYB9pbWdSA3ciLqjTTcvqc30'
export default axios.create({
        baseURL:'https://www.googleapis.com/youtube/v3',
        params:
        {
            part:'snippet',
            maxResults:5,
            key: KEY
        }
    })