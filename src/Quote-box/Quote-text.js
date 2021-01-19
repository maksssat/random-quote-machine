function QuoteText(props) {
  return (
    <figure className="quote-text">
      <blockquote id="text">
        <p>{props.quote}</p>
      </blockquote>
      <figcaption id="author">{props.author}</figcaption>
    </figure>
  );
}

export default QuoteText;
