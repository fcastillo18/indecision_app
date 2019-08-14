import React from 'react';

export default class AddOption extends React.Component {
    state = {
      error: undefined
    }
  
    handleAddOpt =(e) => {
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
          {this.state.error && <p className="add-option-error">{this.state.error}</p>}
          <form className="add-option" onSubmit={this.handleAddOpt}>
            <input className="add-option__input" type="text" name="option" />
            <button className="button">Add Option</button>
          </form>
        </div>
      );
    }
  }