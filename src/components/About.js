import React from 'react'
import { useState } from 'react';

export default function About(props) {

        // const [myStyle, setStyle] = useState({
        //     color: 'white',
        //     backgroundColor: 'grey'
        // });
       
        let myStyle = {
            color: props.mode === 'dark'?'white':'black',
            backgroundColor: props.mode === 'dark'?'#5e5e5e':'white',
            height: '200px',
            width: '800px',
            padding: '20px'
        }


  return (
    <div className="container" style={myStyle}>
                        <h2 className="my-4">About </h2>
                    <div className="accordion" id="accordionExample" >
                This is word count application build in React. This aapplication can count the number of words 
                as well as characters. And show the approx. time to read the article.<br></br> 
                We can also convert the text to upper case, delete and copt text.
                
                
                </div>

               
    </div>
  )
}
