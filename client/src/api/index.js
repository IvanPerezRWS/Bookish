
import axios from 'axios';

const url = 'https://bookish-project.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);