import "./styles.css";
import React from 'react';

export default function Site() {
    return ( 
      <body className="Page">
        <div className="top">
          <TitlePage title = 'MoGo' /> 
        </div>  
             
      </body>
    )    
  }

function TitlePage(props) {
    const title = props.title;
    return (
      <div className='title' >{title}</div>
    )
}    
