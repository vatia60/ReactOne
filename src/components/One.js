import React from 'react';

function clicknow(a){
    alert(a)
}
function One(props){
return(<div>
    <button onClick={clicknow.bind(this,'Working good')}>Click</button>
    <h1>Name:  { props.nickname } Age: { props . age}years</h1>
</div>)
}
 
export default One;
