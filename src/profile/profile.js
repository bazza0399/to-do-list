import React from 'react';
function Profile(props){
    return(
        <>
            <img src ={props.img} style={{width:'100px',height:'100px'}}></img>
            <h5>userName : {props.name}</h5>
            <h5>bio : {props.bio}</h5>
            <h5>profession : {props.pro}</h5>
            
            <button onClick={props.clickHandler}>Click me</button>

        </>
    )
}

export default Profile;