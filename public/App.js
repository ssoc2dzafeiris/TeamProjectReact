import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles'

export default function App(props){

    return (
        <><Navbar /><Main /><Footer /></>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

