import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 076223266a275b2fc3cd3d9714d83aa8d7412b4a5335295bb161f2b79df09db8'
    }
});