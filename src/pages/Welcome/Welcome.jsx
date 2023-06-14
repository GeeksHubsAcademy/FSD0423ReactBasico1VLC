import React, { useState, useEffect } from "react";
import "./Welcome.css";
import { bringCharacters } from "../../services/apiCalls";

export const Welcome = () => {
  //ESTO ES UN HOOK COMO UN AVION
  const [characters, setCharacters] = useState([]);

  //useEffect

//   useEffect(() => {
//     //Este useEffect sólo se ejecuta la primera vez que se monta
//     //el componente.


//   }, []);

//   useEffect(()=>{
//     //Este se ejecuta SIEMPRE que el estado del componente cambie y todo
//     //se renderize de nuevo


//   });

  useEffect(()=>{
    //Este se ejecuta siempre que cambie el hook que está en 
    //seguimiento entre corchetes

    if(characters.length === 0){

        setTimeout(()=>{

            bringCharacters(17)
            .then(
                datos => {
                    setCharacters(datos.data.results)
                }
            )
            .catch(error => console.log(error))

        }, 2500);
        
        
    }


  }, [characters]);


  const personajeEscogido = (elemento) => {
    console.log(elemento)
  }

  return (<div className="welcomeDesign">
        
        { characters.length > 0 ? (
            <div>{
                
                characters.map(
                    personaje => {
                        return (
                            <div 
                                key={personaje.id} 
                                onClick={()=>personajeEscogido(personaje)}
                            >
                                    {personaje.name}
                            </div>
                        )
                    }
                )
            
            }</div>
        )
        
        
            : (<div>CARGANDO......</div>)
        }
        
        
        </div>);
};
