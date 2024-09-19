const API_KEY = 'e9116f767ac94aa19e5223243241909';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;


const show = async (city) => {
    try {
        const queryString = `&q=${city}`;
        const res = await fetch(BASE_URL + queryString);
        //console.log('Res: ', res)
        const data = await res.json();
        //console.log('Data: ', data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export { show };