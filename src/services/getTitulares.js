import axios from 'axios';

export default function getTitulares({country='',category='' }){
    const apiKey='ec5e517a67be47798aaa0966e7cfb48d'//909ec6aacb6f4ed8acb8919aa1db1de7
    var apiUrl='https://newsapi.org/v2/top-headlines?country=co&apiKey='+apiKey

    if(country!='' && category!='' ){
        apiUrl='https://newsapi.org/v2/top-headlines?country='+country+'&category='+category+'&apiKey='+apiKey+'&pageSize=40'
    }else if(country=='' && category!='' ){
        apiUrl='https://newsapi.org/v2/top-headlines?category='+category+'&apiKey='+apiKey+'&pageSize=40'
    }else if(country!='' && category=='' ){
        apiUrl='https://newsapi.org/v2/top-headlines?country='+country+'&apiKey='+apiKey+'&pageSize=40'
    }
    
    return axios.get(apiUrl)
        .then(res => {
        const articulos=res.data.articles.map(articles=>{
            const {urlToImage, title, description, author, url}=articles
            return {urlToImage, title, description, author, url}
        })  
        return [articulos]
        })
}