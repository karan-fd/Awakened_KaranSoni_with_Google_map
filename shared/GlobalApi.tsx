import axios from 'axios';

// const getPlace = () => axios.get('https://jsonplaceholder.typicode.com/todos');

const getPlace = () => axios.get('/api/google-place?' + 'category=indian&radius=5000&lat=35.3734577&lng=-80.7227037');

export default getPlace;
