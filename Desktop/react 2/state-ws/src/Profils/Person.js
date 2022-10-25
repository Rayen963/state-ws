import React from "react";

class App extends React.Component {
    state = {
      name: "Raen"
    };
    handleClick=()=>this.setState({name:'Rayen'})
    render() {
      return(
        <>
        <h1>Hello {this.state.name}</h1>
        <button onClick={this.handleClick}> ClickMe</button>
        </>
      )
    }
   };
   export default App;