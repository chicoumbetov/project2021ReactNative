//import API_TOKEN from '../Helpers/token';
//key API(v3 auth)
const API_TOKEN = "4336d5ada30b10dc332f193721ba4a50"
//https://www.themoviedb.org/

export const getFilmsFromApiWithSearchedText = (text) => {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text;
    return fetch(url)
        .then((response) => response.json())
        .then((json) => {
            return json;
        })
        .catch((error) => console.log(error))
}