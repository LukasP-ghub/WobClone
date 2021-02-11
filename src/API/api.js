import axios from 'axios';


const API_KEY = 'AIzaSyALZyiRJaaaEnuQITd93SjWLxu2SlIouVk';

export default axios.create({
  baseURL: `https://www.googleapis.com/books/v2/`
});

//instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;