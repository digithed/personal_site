import React, { useState } from 'react';

function Animation(props) {
    const [iconMoved, setIconMoved] = useState(false);
    const [textVisible, setTextVisible] = useState(false);
  
    const handleMouseOver = () => {
      setIconMoved(true);
      setTimeout(() => setTextVisible(true), 1000);  // or adjust time as per your transition
    };
  
    const handleMouseOut = () => {
      setIconMoved(false);
      setTextVisible(false);
    };
  
    return (
      <div 
        className="container"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className={`icon ${iconMoved ? 'move' : ''}`}>
          {props.icon}
        </div>
        <div className={`text-white text show`}>
          {props.text}
        </div>
      </div>
    );
  }

  export default Animation;