import React, {useEffect, useState}  from 'react'
import getTitulares from '../services/getTitulares'
import Articulo from './Articulo'

export default function Titulares({country,category}){
  const [articulos, setArticulos]= useState([])

  useEffect(function(){
    getTitulares({country,category})
    .then(function(value) {
        setArticulos(value[0])
    })  
  }, [country, category])

  return(
    <div>
        {   
            articulos.map(articulo => <Articulo key={articulo.url} urlimage={articulo.urlToImage} titulo={articulo.title} descripcion={articulo.description} author={articulo.author} link={articulo.url}/>)
        }
    </div>
  )

}

