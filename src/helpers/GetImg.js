export const GetImg = async ({imgs}) => {
    const url = `http://www.omdbapi.com/?apikey=b34bd459&t=${imgs}`;
    const resp = await fetch(url);
    const data = await resp.json();

    //retornamos la data, ya la informacion viene como quremos 
    return data;
}
