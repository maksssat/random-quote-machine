function QuoteButtons() {
  return (
    <div className="quote-buttons">
      <a
        href="https://twitter.com/intent/tweet?text=Hello%20world"
        id="tweet-quote"
        className="twitter-share-button"
        target="_blank"
        rel="noopener"
      >
        Tweet
      </a>
      <a href="#" id="new-quote">
        New Quote
      </a>
    </div>
  );
}

export default QuoteButtons;
