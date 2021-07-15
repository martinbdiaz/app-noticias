import React from 'react'

export default function Contenido({urlimage,titulo,descripcion,author,link}){
  //useEffect(function(){
  //}, [])//sin dependencias sólo 1 vez
    if(urlimage){
        return( 
            <div class="article">
                <div class="image"><img src={urlimage} alt=""/></div>
                <div class="description">                            
                    <div class="title"><b>{titulo}</b></div>
                    <div class="content-description">{descripcion}</div>
                    <div class="author"><b>Autor:</b> {author}</div>
                </div>
                <div class="btn"><a href={link} target="_blank" rel="noreferrer">Ver más</a></div>
            </div>
        ) 
    }else{
        return('')
    }

        
}