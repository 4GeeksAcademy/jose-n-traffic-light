import React, {useEffect, useState} from 'react'
import Stick from './Stick'

const Component1 = () => {

    const [selectRed,setSelectRed] = useState(false)
    const [selectYellow,setSelectYellow] = useState(false)
    const [selectGreen,setSelectGreen] = useState(false)

    const handlerRed = () =>{
        setSelectRed(true);
        setSelectYellow(false)
        setSelectGreen(false)
    }

    const handlerYellow = () =>{
        setSelectRed(false);
        setSelectYellow(true)
        setSelectGreen(false)
    }

    const handlerGreen = () =>{
        setSelectRed(false);
        setSelectYellow(false)
        setSelectGreen(true)
    }



  return (

    // <Stick />

    <div className='container d-flex flex-column box'>

        <div className='row d-flex justify-content-center' onClick={handlerRed}>


            <div className={selectRed ? 'red-light selected': 'red-light' } ></div>
            
            
        </div>

        <div className='row d-flex justify-content-center' onClick={handlerYellow}>
            <div className={selectYellow? 'yellow-light selected': 'yellow-light' } ></div>
        </div>


        <div className='row d-flex justify-content-center' onClick={handlerGreen}>
            <div className={selectGreen? 'green-light selected': 'green-light' } ></div>
        </div>

        


    </div>
  )
}

export default Component1