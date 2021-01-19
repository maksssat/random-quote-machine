import React from "react";
import "./Quote-box.css";
import QuoteText from "./Quote-text";
import QuoteButtons from "./Quote-buttons";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      randomNumber: 0,
      quotes: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/maksssat/random-quote-machine/master/quotes.json"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            quotes: data,
            randomNumber: Math.floor(Math.random() * data.length),
          });
        },
        (error) => {
          this.setState({ isLoaded: true, error });
        }
      );
  }

  handleClick() {
    this.setState({
      randomNumber: Math.floor(Math.random() * this.state.quotes.length),
    });
  }

  render() {
    const n = this.state.randomNumber;
    const quote = this.state.isLoaded ? this.state.quotes[n].quote : null;
    const author = this.state.isLoaded ? this.state.quotes[n].author : null;
    return (
      <div id="quote-box">
        <QuoteText quote={quote} author={author} />
        <QuoteButtons onClick={this.handleClick} />
      </div>
    );
  }
}

export default QuoteBox;
