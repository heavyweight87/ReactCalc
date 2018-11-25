import React from "react";
import "./Key.css";

class Key extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          isHighlighted: false
        };

        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
    }
    
    render() {
        var classString = "key";
        if(this.state.isHighlighted) {
            classString += ' highlighted'
        }
        return (
            <div className={classString}
                onClick={this.onClick.bind(this)}
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}>
                {this.props.name}
            </div> 
        );
    }

    onClick() {
        this.props.handleKeyClick(this.props.name)
    }
    
    onMouseDown() {
        this.setState({
            isHighlighted: true
        });
    }
    
    onMouseUp() {
        this.setState({
            isHighlighted: false
        });
    }
}

export default Key