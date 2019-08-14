
// console.log('App running');

// let showText = false;
// let pText= '';
// // let textBtn= 'Show details'

// const turnToggle = () => {
//     showText = !showText;
//     if (showText) {
//         pText= 'Some content to be show';
//         //textBtn = 'Hide details';
//         render();
//     }else{
//         pText = '';
//         //textBtn = 'Show details'
//         render();
//     }
// }

// const appRoot = document.getElementById('app');

// const render = () => {
    
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={turnToggle}>
//                 {showText ? 'Hide details': 'Show details'}
//             </button>
//             <p id='text'>{pText}</p>
//             {
//                 showText && (
//                     <div>
//                         <p>Hey, this is a second way!</p>
//                     </div>
//                 )
//             }
//         </div>
//     );
    
//     ReactDOM.render(template, appRoot);
// };

// render();

/*****************************************/

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {
                    this.state.visibility && (
                        <div> 
                            <p>Some content to be show</p>
                        </div>
                    )
                }
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));