import React from "react";
import Book from "./Book";

class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 1 };
    }

    render() {
        return (
            <ul className="App-header">
                <button onClick={(e) => this.setState({ count: this.state.count - 1 })} >-</button>
                <span>{this.state.count}</span>
                <button onClick={(e) => this.setState({ count: this.state.count + 1 })} >+</button>
                <h2>Our Collection</h2>
                {this.props.books.map(b => <Book title={b.title} description={b.description} />)}

            </ul >

        );
    }

}

export default BookList;