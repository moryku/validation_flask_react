import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeForm from "./components/form/HomeForm";
import 'antd/dist/antd.css';
import {Form} from "antd";

function App() {
    return (

        <div className="App">
            <br/><br/>
            <h1>Validation</h1>
            <HomeForm></HomeForm>
        </div>
    );
}

export default App;
