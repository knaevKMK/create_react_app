import React from "react";
import Book from "./Book";

class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 3 };
        this.resetCounter = this.resetCounter.bind(this);
    }

    decrementCounter() {
        this.setState(oldState => ({ count: oldState.count - 1 }));
    }

    incrementCounter() {
        this.setState(oldState => ({ count: oldState.count + 1 }));
    }
    resetCounter() {
        this.setState({ count: 0 });
    }
    render() {
        return (
            <ul className="App-header">
                <button onClick={(e) => this.decrementCounter()} >-</button>
                <span>{this.state.count}</span>
                <button onClick={this.incrementCounter.bind(this)} >+</button>
                <button onClick={this.resetCounter} >Reset</button>
                <h2>Our Collection</h2>
                {this.props.books.map(b => <Book title={b.title} description={b.description} />)}

            </ul >

        );
    }

}

export default BookList;