import React from "react";
import "./Calculator.css";
import Key from "./Key";
import Display from "./Display"

class Calculator extends React.Component {


    constructor() {
        super();
        this.state = {
            value: "0"
        }
    }   
    
    GetCalcResult(currentValue, newKey) {
        var newValue = currentValue + newKey;
        return {value: newValue}
    }

    handleKeyClick(name) {        
        this.setState(this.GetCalcResult(this.state.value, name));
    }
    
    render() {
        return (
            <div className="calculator">
                <Display value={this.state.value}/>
                <div className="keyRow">
                    <Key name="7" handleKeyClick={this.handleKeyClick.bind(this)}/>
                    <Key name="8" handleKeyClick={this.handleKeyClick.bind(this)}/>
                    <Key name="9" handleKeyClick={this.handleKeyClick.bind(this)}/>
                </div>
                <div className="keyRow">
                    <Key name="4" handleKeyClick={this.handleKeyClick.bind(this)}/>
                    <Key name="5" handleKeyClick={this.handleKeyClick.bind(this)}/>
                    <Key name="6" handleKeyClick={this.handleKeyClick.bind(this)}/>
                </div>
                <div className="keyRow">
                    <Key name="1" handleKeyClick={this.handleKeyClick.bind(this)}/>
                    <Key name="2" handleKeyClick={this.handleKeyClick.bind(this)}/>
                    <Key name="3" handleKeyClick={this.handleKeyClick.bind(this)}/>
                </div>
                <div className="keyRow">
                    <Key name="0" handleKeyClick={this.handleKeyClick.bind(this)}/>
                    <Key name="." handleKeyClick={this.handleKeyClick.bind(this)}/>
                    <Key name="=" handleKeyClick={this.handleKeyClick.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default Calculator