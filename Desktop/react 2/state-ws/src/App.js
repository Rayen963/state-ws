import React from "react";
import myImage from './Profils/pmli.GIF';
import Person from './Profils/Person';
import Toggle from './Profils/Toggle';
import  Lifecycle  from './Profils/Lifecycle';

class App extends React.Component {
  
  state = {
    Person: {
      fullName: "Rayen Sassi",
      bio: "Desiner & Developer",
      imgSrc: myImage,
      profession: "Ethical Hack"
    },
    show: true
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="Naruto"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
        
      <Person></Person>
      <Toggle></Toggle>
      <Lifecycle></Lifecycle>

      </>
    );
  }
}
export default App;