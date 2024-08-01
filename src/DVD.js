import React, { useEffect, useState } from "react";
import "./_style.scss"
let direccionX = false//debe de ir afuera porque se renderiza
let direccionY = false
let colorNum = 0
let aux = true;
let aux2 = true;
const doc = document.getElementById("container")//necesario



export const DVD = (props) => {


    const [valueX, setValueX] = useState(0)
    const [valueY, setValueY] = useState(0)
    const colorArray = ["red", "green", "blue", "yellow", "purple", "orange", "aqua", "goldenrod"
        , "greenyellow", "lime", "magenta", "olive", "silver", "fuchsia", "firebrick", "darkblue", "cadetblue",
        "aquamarine"
    ]
    const [color, setColor] = useState("gray")
    //const [direccionX,setDireccionX]=useState(false)//no se porque no se puede con state
    //const [direccionY,setDireccionY]=useState(false)
    const cahngeColor = () => {
        //colorNum=colorArray.length>colorNum?colorNum+1:0;
        setColor(colorArray[colorNum])
        colorNum = colorArray.length > colorNum + 1 ? colorNum + 1 : 0;

        return;
    }
    useEffect(() => {
        const height = document.getElementById("container").offsetHeight - 90;
        const width = document.getElementById("container").offsetWidth - 130;//porque va aqui
        if (props.click) {//solo no se que pasa con el return
            const interval = setInterval(() => {

                if (valueX < width && !direccionX) {
                    setValueX(prev => prev + 1);
                    aux = direccionX
                } else {



                    direccionX = true

                }
                aux !== direccionX && cahngeColor()

                if (0 < valueX && direccionX) {
                    setValueX(prev => prev - 1);
                    aux = direccionX
                } else {

                    direccionX = false

                }
                aux !== direccionX && cahngeColor()
                ///////////////////////////////////////////////////////////

                if (valueY < height && !direccionY) {
                    setValueY(prev => prev + 1);
                    aux2 = direccionY
                } else {
                    //cahngeColor()
                    direccionY = true
                }
                aux2 !== direccionY && cahngeColor()

                if (0 < valueY && direccionY) {
                    setValueY(prev => prev - 1);
                    aux2 = direccionY
                } else {
                    //cahngeColor()
                    direccionY = false
                }
                aux2 !== direccionY && cahngeColor()


            }, 5);//velocidad

            //console.log(valueX + " " + valueY)//imprimir coordenadas

            return () => { clearInterval(interval) }
        }
    }, [valueX, valueY, props.click])
    return (
        <div className="screen" >
            {!props.click && <h6 className='click'>PRESS CLICK</h6>}
            <div className="container" id="container">
                <div style={{ background: `${color}`, transform: `translate(${valueX}px,${valueY}px)` }} className="cube">
                    <h2>DVD</h2>
                </div>
            </div>
        </div>
    )
}