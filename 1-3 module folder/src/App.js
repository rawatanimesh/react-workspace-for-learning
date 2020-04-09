import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
// import person from './Person/Person';

  
class App extends Component {
  state = {
    persons:[
      {id: 'a1', name:"Ani", age:"26"},
      {id: 'a2', name:"Anu", age:"29"},
      {id: 'a3', name:"Toshi", age:"22"},
    ],
    otherState:"some other values",
    showPerson: false
  }

  // switchNameHandler = (newName) => {
  //   console.log("clicked");
  //   // this.state.persons[0].name = 'Animesh';
  //   this.setState({
  //     persons:[
  //       {name:newName, age:"26"},
  //       {name:"Anu", age:"29"},
  //       {name:"Toshi", age:"22"},
  //     ]
  //   })
  // }

  nameChangeHandler =(event, id) =>{
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  togglePersonHandler  = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }
  
  render(){
    const style = {
      backgroundColor: "white",
      padding: "8px",
      border: "1px solid blue",
      cursor: "pointer"
    }

    let persons = null;

    if (this.state.showPerson){
      persons = (
        <div>
          {
            this.state.persons.map((person,index) =>{
              return <Person name={person.name} 
              age={person.age}
              click={this.deletePersonHandler.bind(this,index)}
              key={person.id}
              changed={(event) => {this.nameChangeHandler(event,person.id)}}/>
            })
          }
          {/* <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this,'Ash')}
          changed={this.nameChangeHandler}> My hobby is travelling</Person>
          <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/> */}
        </div> 
      );
    }
    return (
      <div className="App">
        <h1>This is a React App</h1>
        <div>hello, this is another div</div>
        {/* <button style={style} 
        onClick={() => this.switchNameHandler('Ashi')}>Switch Name</button> */}
        <button style={style} 
        onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}  
      </div>
      
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hey what\'s up?'));
  }
  
}

export default App;

// const App = props => {  
//   const [personState, setPersonState] = useState({
//     persons:[
//             {name:"Ani", age:"26"},
//             {name:"Anu", age:"29"},
//             {name:"Toshi", age:"22"},
//           ],
    
//   });

//   const [otherState, setOtherState] = useState({
//     otherState:"some other values"
//   });

//   console.log(personState,otherState);
//   const switchNameHandler = () => {
//         console.log("clicked");
//         // this.state.persons[0].name = 'Animesh';
//         setPersonState({
//           persons:[
//             {name:"Animesh", age:"26"},
//             {name:"Anu", age:"29"},
//             {name:"Toshi", age:"22"},
//           ]
//         })
//       }

//     return (
//       <div className="App">
//         <h1>This is a React App</h1>
//         <div>hello, this is another div</div>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
//         <Person name={personState.persons[1].name} age={personState.persons[1].age}> My hobby is travelling</Person>
//         <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
  
//       </div>
      
//     );
//     // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hey what\'s up?'));
// }