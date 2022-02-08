import React from 'react';
import './details.css'
export const Detailsbox = (props) => {
  return <>
                   <div className='details-box'>
                        <p className='subtitle'>{props.subtitle}</p>
                       <h4 className='title'>{props.title}</h4>
                       <p className='para'>{props.para}</p>
                   </div>
        </>;
};

export default Detailsbox