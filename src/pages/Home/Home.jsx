
import React from 'react';
import "./Home.css";

export const Home = () => {

    let interruptor = true;


    return(
        <div className='homeDesign'>

            {/* {
                // Esto es un renderizado condicional
                interruptor === true &&

                <div>El interruptor es true</div>

            } */}

            {/* {
                //Ejemplo de renderizado condicional con una ternaria
                interruptor === true 

                ? (
                    <div>El interruptor es true</div>
                )

                : (
                    <div>El interruptor es false</div>

                )
            } */}

        </div>
    )

}