import React from 'react'

const Results = (props) => {
  return (
    <div>
        {props.results.country && <div>{props.results.country}</div>}
        {props.results.city && <div>{props.results.city}</div>}
        {props.results.temperature && <div>{props.results.temperature}<span>° C</span></div>}
        {props.results.conditionText && <div><img src={props.results.icon} alt="icon"/><apan>{props.results.conditionText}</apan></div>}
    </div>
  );
};

export default Results