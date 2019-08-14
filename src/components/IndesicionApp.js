import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],// props.options//[]//['Thing one', 'Thing two', 'Thing 3']
        selectedOption: undefined
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
        //replace with the line above
      // this.setState(() => {
      //   return{
      //     options: []
      //   }
      // })
    }
    
    handleDeleteOption =(optionToRemove) => {
      this.setState((prevState) => ({
        options: prevState.options.filter((option)=>{
          return optionToRemove !== option; //false for no include the item in filter
        })
      }));
    }
    
    handlePick = () =>{
      const randomNum = Math.floor(Math.random () * this.state.options.length);
      const option = this.state.options[randomNum];
    //   alert(option);
      this.setState((prevState) => (
        {
            selectedOption: option
        }
      ));
    }
    
    handleAddOption = (option) => {
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

  
    render() {
      // const title = 'Indecision'; Was replace by defaultProps
      const subtitle = 'Put your life in the hands of a computer';
      //const options = ['Thing one', 'Thing two', 'Thing four'];
  
      return (
        <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action 
            hasOption={this.state.options.length > 0} 
            handlePick={this.handlePick} 
          />
          <div className="widget">
            <Options 
            options={this.state.options} 
            handleDeleteOptions={this.handleDeleteOptions} 
            handleDeleteOption={this.handleDeleteOption} 
            />
            <AddOption 
              handleAddOption = {this.handleAddOption}
            />
          </div>
        </div>
          
          <OptionModal 
            selectedOption = {this.state.selectedOption}
            handleClearSelectedOption = {this.handleClearSelectedOption}
          />
        </div>
      );
    }
  }
  //Change for localStorage
  // IndecisionApp.defaultProps = {
  //   options: []
  // }