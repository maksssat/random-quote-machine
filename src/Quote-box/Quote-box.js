import React from "react";
import "./Quote-box.css";
import QuoteText from "./Quote-text";
import QuoteButtons from "./Quote-buttons";

const test = [
  {
    quote: "Hello",
    author: "Me",
  },
  {
    quote: "World",
    author: "You",
  },
  {
    quote: "Again",
    author: "We",
  },
];

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const randomNumber = Math.floor(Math.random() * test.length);
    this.setState({
      randomNumber: randomNumber,
    });
  }

  render() {
    const number = this.state.randomNumber;
    const quote = test[number].quote;
    const author = test[number].author;
    return (
      <div id="quote-box">
        <QuoteText quote={quote} author={author} />
        <QuoteButtons onClick={this.handleClick} />
      </div>
    );
  }
}

export default QuoteBox;
