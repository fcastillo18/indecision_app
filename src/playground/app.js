class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []// props.options//[]//['Thing one', 'Thing two', 'Thing 3']
    }
  }

  componentDidMount(){
    // console.log('Did mount, fetch data');
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() =>({ options: options }))
      }
    } catch (error) {
      //do nothing at all (if json data is invalid)
    }
}

  componentDidUpdate(prevProps, prevState){
    // console.log('Will Update, saving data');
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount(){
    console.log('Will unmount');
  }

handleDeleteOptions(){
    this.setState(() => ({ options: [] }));
    //replace with the line above
  // this.setState(() => {
  //   return{
  //     options: []
  //   }
  // })
}

handleDeleteOption(optionToRemove){
  this.setState((prevState) => ({
    options: prevState.options.filter((option)=>{
      return optionToRemove !== option; //false for no include the item in filter
    })
  }));
}

handlePick(){
  const randomNum = Math.floor(Math.random () * this.state.options.length);
  const option = this.state.options[randomNum];
  alert(option);
}

handleAddOption(option){
  if (!option) {
    return 'Enter valid value to add value';
  }else if(this.state.options.indexOf(option) > -1){
    return 'This option already exists';
  }

  this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
  
  //replace with the line above
  // this.setState((prevState) => {
  //   //use concat to merge array and not change the state
  //   return{
  //     options: prevState.options.concat([option])
  //   }
  // })
}
  render() {
    // const title = 'Indecision'; Was replace by defaultProps
    const subtitle = 'Put your life in the hands of a computer';
    //const options = ['Thing one', 'Thing two', 'Thing four'];

    return (
      <div>
      <Header subtitle={subtitle} />
        <Action 
          hasOption={this.state.options.length > 0} 
          handlePick={this.handlePick} 
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions} 
          handleDeleteOption={this.handleDeleteOption} 
        />
        <AddOption 
          handleAddOption = {this.handleAddOption}
        />
      </div>
    );
  }
}
//Change for localStorage
// IndecisionApp.defaultProps = {
//   options: []
// }

const Header = (props) =>{
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps= {
  title: 'Indecision'
}
//Refactor to use Stateless functional component
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

const Action = (props) => {
    return (
      <div>
        <button 
          onClick={props.handlePick}
          disabled={!props.hasOption}
        >
          What should I do?
        </button>
      </div>
    );
}

// //Refactor to use Stateless functional component
// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button 
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOption}
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

const Options= (props) => {
    return (
      <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started</p> }
        {
          props.options.map((option) => ( 
            <Option 
              key={option} 
              optionText={option} 
              handleDeleteOption={props.handleDeleteOption}
            />
          ))
        }
      </div>
    );
}

//Refactor to use Stateless functional component
// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         {
//           this.props.options.map((option) => <Option key={option} optionText={option} />)
//         }
//       </div>
//     );
//   }
// }

const Option = (props) => {
    return (
      <div>
        {props.optionText}
        <button 
          onClick={(e) => {
            props.handleDeleteOption(props.optionText)
          }}
        >
        Remove</button>
      </div>
    );
}
//Refactor to use Stateless functional component
// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.optionText}
//       </div>
//     );
//   }
// }

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOpt = this.handleAddOpt.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddOpt(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error: error }))

//if there was not error, clear the input
    e.target.elements.option.value = '';

    //replace with the line above
    // this.setState(() => {
    //   return {
    //     error: error
    //     //or just: error if a the property and value(if come from a variable) have the same name 
    //   }
    // })

    // if (option) {
    //   this.props.handleAddOption(option);
    // }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOpt}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
