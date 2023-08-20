import React from 'react'

export default function Alert(props) {
  const capalize = (word) => {
    let lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div className='alert-placeholder'>
   {props.alert && (<div className={`alert alert-${props.alert.type} alert-dismissible show`} role="alert">
        <strong>{capalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>)}
    </div>
  );
}
