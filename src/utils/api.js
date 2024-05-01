import axios from "axios";

export default axios.create({
    baseURL: 'https://text-translator2.p.rapidapi.com',
    
        headers: {
            'X-RapidAPI-Key': 'f08c1e0947msh551b1fd749b0da1p18310ejsnbe44bc6d6c6b',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
          },
    
});