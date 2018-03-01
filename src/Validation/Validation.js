import React from 'react';

const Validation = (props) => {

  const length = props.inputText.length > 5 ? " the text is too long" : " the text it is too short"
  
  return (
    <div>
      <p>the length of the text is : {props.inputText.length} 
      {length}
      </p>
    </div>
    );
}

export default Validation;