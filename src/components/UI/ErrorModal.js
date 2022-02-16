import React from 'react';
import Card from './Card';

const ErrorModal = (props)=>{
  return (
    <div>
      <Card>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
        <p>{props.message}</p>
        </div>
        <footer>
        <button onClick={props.onConfirm}>Ok</button>
        </footer>
      </Card>
    </div>
    );
}
export default ErrorModal;