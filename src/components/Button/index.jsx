import React from 'react';
import './styles.scss';

function Button(props) {
  return (
    <button className={props.className}>
      <img src={props.source} alt="" />
      <a href={props.link} target="blank">
        {' '}
        {props.name}{' '}
      </a>
    </button>
  );
}

export default Button;
