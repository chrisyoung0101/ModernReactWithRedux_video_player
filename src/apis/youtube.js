import axios from 'axios';

// as is, this API key will be shipped to the user's browser which is 
//generally a no no however this API key is meant to be used like this publicly
//as it is just for testing really and not production.
const KEY = 'AIzaSyAsZ1Dsh5tv-Kay8HF09gEj4RDS9m6KnFI';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', 
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});


