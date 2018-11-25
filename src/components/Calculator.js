import React from "react";
import "./Calculator.css";
import Key from "./Key";
import Display from "./Display"

class Calculator extends React.Component {
    
    render() {
        return (
            <div className="calculator">
                <Display />
                <div className="keyRow">
                    <Key name="7"/>
                    <Key name="8"/>
                    <Key name="9"/>
                </div>
                <div className="keyRow">
                    <Key name="4"/>
                    <Key name="5"/>
                    <Key name="6"/>
                </div>
                <div className="keyRow">
                    <Key name="1"/>
                    <Key name="2"/>
                    <Key name="3"/>
                </div>
                <div className="keyRow">
                    <Key name="0"/>
                    <Key name="."/>
                    <Key name="="/>
                </div>
            </div>
        );
    }
}

export default Calculator