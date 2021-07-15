import React, {useEffect, useState}  from 'react'
import getAutores from '../services/getAutores'
import Info from './Info'
import Articulo from './Articulo'
import Titulares from './Titulares'
import lupa from  '../images/magnifying-glass.png'

export default function Contenido({value}){
  const [enable, setEnable]= useState('disable')
  const [totalArticulos, setTotalArticulos]= useState(0)
  const [articulos, setArticulos]= useState([])
  //const [autores,setAutores]=useState([])
  const [cantidadAutores,setCantidadAutores]=useState(0)
  const [page,setPage]=useState(1)
  const [query,setQuery]=useState('*')
  const apiKey='ec5e517a67be47798aaa0966e7cfb48d'//909ec6aacb6f4ed8acb8919aa1db1de7
  const [pais,setPais] = useState('')
  const [categoria,setCategoria] = useState('')
    
  useEffect(function(){
    getAutores(query,apiKey,page)
      .then(function(value) {
        setTotalArticulos(value[0])
        //setAutores(value[1])
        setCantidadAutores(value[2])
        setArticulos(value[3])
       })
  }, [query])//sin dependencias sólo 1 vez

    if(value=='0'){
        return(
            <>
                <Info articulos={totalArticulos} autores={cantidadAutores}  />
            </> 
        )
    }else if(value=='1'){
        return(
            <React.Fragment>
                {
                    articulos.map(articulo => <Articulo key={articulo.url} urlimage={articulo.urlToImage} titulo={articulo.title} descripcion={articulo.description} author={articulo.author} link={articulo.url}/>)
                }
            </React.Fragment>
        )     
    }else if(value=='2'){

        return(
            <React.Fragment>
                <div className="buscador">
                    <input type="search" placeholder="Buscar artículos" ></input>
                    <img src={lupa} alt="" onClick={()=>{
                        setQuery(document.querySelector('.buscador input').value)
                        setTimeout(function(){
                            setEnable('enable')
                        },700)
                    }}/>
                </div>
                <br/>
                <div className={enable}>
                    {   
                        articulos.map(articulo => <Articulo key={articulo.url} urlimage={articulo.urlToImage} titulo={articulo.title} descripcion={articulo.description} author={articulo.author} link={articulo.url}/>)
                    }
                </div>
            </React.Fragment>
        )     
    }else if(value=='3'){

        return(
            <React.Fragment>

                <select className="countrySelect">
                    <option value="">Seleccione</option>
                    <option value="ar">Argentina</option>
                    <option value="at">Austria</option>
                    <option value="au">Australia</option>
                    <option value="be">Bélgica</option>
                    <option value="br">Brasil</option>
                    <option value="ca">Canadá</option>
                    <option value="ch">Suiza</option>
                    <option value="cn">China</option>
                    <option value="co">Colombia</option>
                    <option value="cu">Cuba</option>
                    <option value="de">Alemania</option>
                    <option value="eg">Egipto</option>
                    <option value="fr">Francia</option>
                    <option value="gb">Reino Unido</option>
                    <option value="gr">Grecia</option>
                    <option value="hk">Hong Kong</option>
                    <option value="hu">Hungría</option>
                    <option value="ie">Irlanda</option>                    
                    <option value="il">Israel</option>
                    <option value="in">India</option>                    
                    <option value="it">Italia</option>
                    <option value="jp">Japón</option>
                    <option value="ma">Marruecos</option>
                    <option value="mx">México</option>
                    <option value="nz">Nueva Zelanda</option>
                    <option value="pt">Portugal</option>
                    <option value="ru">Rusia</option>
                    <option value="sg">Singapur</option>
                    <option value="tr">Turquía</option>
                    <option value="us">Estados Unidos de América</option>
                    <option value="ve">Venezuela</option>
                    <option value="za">Sudáfrica</option>
                </select>
                
                <select className="categorySelect">
                    <option value="">Seleccione</option>
                    <option value="business">Business</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="health">Health</option>
                    <option value="sports">Sports</option>
                    <option value="technology">Technology</option>
                    <option value="general">General</option>
                    <option value="science">Science</option>
                </select>

                <input type="button" onClick={()=>{
                    setPais(document.querySelector('select.countrySelect').value)
                    setCategoria(document.querySelector('select.categorySelect').value)
                    
                    //console.log({pais},{categoria})
                }} value="VER NOTICIAS"/>
                <br/>

                <Titulares country={pais} category={categoria}/>

            </React.Fragment>
        )     
    }
}