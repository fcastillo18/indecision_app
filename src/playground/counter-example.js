// // var user = {
// //     name: 'FK',
// //     age: 27,
// //     location: 'DR'
// // }

// // function getLocation(location){
// //     if(location){
// //         return <p>Location: {location}</p>
// //     }
// // }

// // //practice
// // //<h1> Ternary operator.
// // var name = 'fk';
// // var template2 = (
// //     <div> 
// //         <h1>{user.name ? user.name : 'Anonymous'}</h1>
// //         {false}
// //         {null}
// //         {undefined}
// //         {user.age >= 18 && <p>Age: 27</p>}
// //         {getLocation(user.location)}
// //     </div> 
// // );


// //Events and attributes.
// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
//     console.log(`AddOne ${count}`);
// }

// const minusOne = () => {
//     count--;
//     renderCounterApp();
//     console.log('minusOne');
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp();
//     console.log('reset');
// }

// const  templateTwo = (
//     <div> 
//         <h1>Count: {count} </h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>Reset</button>
        
//     </div>
// );



// ReactDOM.render(templateTwo, appRoot);

// //Manual data binding
// //Simulation of how React render the DOM 
// const renderCounterApp = () =>{
//     const  templateTwo = (
//         <div> 
//             <h1>Count: {count} </h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
            
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();

/*--------------------------*/

class Counter extends React.Component{
    /*Biding this for the methods */
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount(){
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount,10);
        if (!isNaN(count)) {
            this.setState(() => ({count:  count}))
        }
    }

    componentDidUpdate(prevProp, prevState){
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count)
            //console.log('did update ', json);  
        }
        
    }

    componentWillUnmount(){

    }

    handleAddOne(){
        this.setState((prevState) =>{ //this is the actual value, usally call previusState
            return {
                count: prevState.count + 1,
                other: 'object'
            }
        });
    }

    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    handleReset(){
        this.setState(() => {
            return{
                count: 0
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

// Counter.defaultProps ={
//     count: 0
// }

ReactDOM.render(<Counter />, document.getElementById('app'));