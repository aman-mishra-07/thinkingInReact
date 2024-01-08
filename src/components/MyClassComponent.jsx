import React, { Component } from "react";

class MyClassComponent extends Component {
    render(){
        return (
            <div className="text-yellow-600 text-4xl0">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, facere.</p>
                <h3>class component made by {this.props.name}</h3>
            </div>
        )
    }
}
export default MyClassComponent;