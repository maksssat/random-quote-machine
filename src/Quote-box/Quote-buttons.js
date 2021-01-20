import Button from "./Button";

function QuoteButtons(props) {
  return (
    <div className="quote-buttons">
      <Button
        href={
          "https://twitter.com/intent/tweet?text=" +
          '"' +
          props.quote +
          '"' +
          " " +
          props.author +
          "."
        }
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
