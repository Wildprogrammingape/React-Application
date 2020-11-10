import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value : this.props.counter.value

    //     //tags : []
    // };

    // bind event handler
    // handleIncrement = () => {
    //     this.setState({value : this.state.value + 1})
    //     // console.log("Increment Clicked", this);
    // };

    // renderTags(){
    //     if (this.state.tags.length === 0) return <p>There is no tags!</p>;

    //     return <ul>{this.state.tags.map(tag => <li>{tag}</li>)}</ul>;
    // }

    render() { 
        console.log(this.props);
        //console.log('props', this.props);
        return( 
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span> 
                <button 
                onClick= {() => this.props.onIncrement(this.props.counter)}
                className="btn btn-secondary btn-sm">Increment
                </button> 
                <button 
                onClick={() => this.props.onDelete(this.props.counter.id)}
                className="btn btn-danger btn-sm m-2">Delete
                </button>
            </div>
        )
    }

    //  true && "Hello"      =>      "Hello"
    // {this.state.tags.length == 0 && "Please enter the tags"}   
    // {this.renderTags()}
    // {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span> */}
    // {/* <button className="btn btn-secondary btn-sm">Increment</button> */}
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value: count} = this.props.counter;
        return count == 0 ? <h1>Zero</h1> : count;
    }

}
 
export default Counter;