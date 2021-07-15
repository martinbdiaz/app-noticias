import axios from 'axios';

export default function getAutores(query,apiKey,page){
    const apiUrl='https://newsapi.org/v2/everything?q='+query+'&apiKey='+apiKey+'&pageSize=50&page='+page
    return axios.get(apiUrl)
        .then(res => {
        const cantArticulos=res.data.totalResults
        const articulos=res.data.articles.map(articles=>{
            const {urlToImage, title, description, author, url}=articles
            return {urlToImage, title, description, author, url}
        })
        //const pages=Math.ceil(articulos/100)
        
        const autoresTemporal=res.data.articles.map(actual=>actual.author)
        const matriz=Object.values(autoresTemporal)
        let result = matriz.filter((item,index)=>{
            //if(Array.isArray(matriz) && matriz.indexOf(item) === index) {
                return matriz.indexOf(item) === index;
            //}
        })
        return [cantArticulos,result,result.length,articulos]
    })
}