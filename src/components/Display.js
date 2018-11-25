import React from "react";
import "./Display.css";

class Display extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: "0"
        }
    }

    render() {
        return (
            <div className="display">{this.state.value}</div>
        );
    }
}

export default Display