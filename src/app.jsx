import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import Clock  from './clock.jsx';

class App extends Component {
    render(){
        return(
            <Clock></Clock>
        );
    }
}

export default App;

ReactDOM.render(<App />,document.getElementById('root'));