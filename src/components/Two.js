import React, { Component } from 'react';

class Two extends Component {
    state = {  }
    clicknow(a){
        alert(a)
    }
    render() { 
    return <div>
            <button onClick={this.clicknow.bind(this,'Working good')}>Click</button>
            <h1>Name: {this.props.nickname} Age: {this.props.age} years</h1>
           </div>
    }
}
 
export default Two;