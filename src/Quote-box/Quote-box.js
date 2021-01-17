import React from "react";
import "./Quote-box.css";
import QuoteText from "./Quote-text";
import QuoteButtons from "./Quote-buttons";

class QuoteBox extends React.Component {
  render() {
    return (
      <div id="quote-box">
        <QuoteText />
        <QuoteButtons />
      </div>
    );
  }
}

export default QuoteBox;
