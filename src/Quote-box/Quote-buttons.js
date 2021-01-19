import Button from "./Button";

function QuoteButtons(props) {
  return (
    <div className="quote-buttons">
      <Button
        href="https://twitter.com/intent/tweet?text=Hello%20world"
        id="tweet-quote"
        className="twitter-share-button"
        text="Tweet"
        target="_blank"
      />
      <Button
        href="#"
        id="new-quote"
        text="New Quote"
        onClick={props.onClick}
      />
    </div>
  );
}

export default QuoteButtons;
