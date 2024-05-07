import axios from "axios"

const apiUrl = `https://proud-sunset-118f.jalajdorai1.workers.dev/api/get-places`

const formatUrl = (params) => {

    let url = apiUrl + "&per_page=25&safesearch=true&editors_choice=true"

    if (!params) return url;

    let paramsKey = Object.keys(params);
    paramsKey.map(key => {
        let value = key == 'q' ? encodeURIComponent(params[key]) : params[key];
        url += `&${key}=${value}`
    })
    console.log('final reslt', url);
    return url;
}

export const apiCall = async (params) => {

    try {
        const response = await axios.get(apiUrl)
        const { data } = response;
        return { success: true, data }

    } catch (error) {
        console.log("got error", error.message);

        return { success: false, msg: error.message }
    }
}