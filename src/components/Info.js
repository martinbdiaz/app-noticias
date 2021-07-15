import React from 'react'

export default function Info({articulos,autores}){
    return(
        <>
            <span>Total de articulos: </span>{articulos}
            <br/>
            <span>Cantidad de autores: </span>{autores}
        </>
    )
}