import React from 'react';

const Action = (props) => {
    return (
      <div>
        <button className="big-button"
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

export default Action;