import React from 'react'


function LinkTag(props) {
    const hasIcon = props.hasIcon
    if(hasIcon){
      return (
        <div className="link">
          <a className={props.class} style={props.style} href={props.link}><i className={props.icon}></i>&nbsp;{props.linkName}</a>
        </div>
      );
    }else{
      return (
        <div className="link">
          <a className={props.class} style={props.style} href={props.link}>{props.linkName}</a>
        </div>
      );
    }
  }
  
  export default LinkTag;