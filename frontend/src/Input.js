import React from 'react'
import './Input.css'
import dom from 'react-dom';

const Input = (props) => {
    // document.getElementsByClassName('con')[0].style.height = '100%';
    
    // let input = document.createElement('div');
    // input.className = 'cons';
    // input.style.height = '100%';
    // input.style.width = '100%';
    // input.style.display = 'flex';
    // input.style.flexDirection = 'column';
    // input.style.justifyContent = 'center';
    // input.style.alignItems = 'center';
    // // input.style.position = 'relative';
    // input.style.backgroundColor = '#f5f5f5';
    // input.style.borderRadius = '10px';
    // input.style.boxShadow = '0px 0px 10px #ccc';
    // input.style.padding = '10px';
    // input.style.margin = '10px';
    // // input.style.zIndex = '1';
    // // input.style.overflow = 'hidden';
    // input.style.transition = 'all 0.5s ease-in-out';
    // input.innerHTML = `<p>${props.message}</p>`;
    // document.getElementsByClassName('input').append(input);



  return (

    <div className='input'>
        
        <div className='message'>{props.message.map((res)=>{
            <p>{res.message}</p>
        })}</div>
    </div>
  )
}

export default Input