/**
 * The JSON of quotes is from the site keepinspiring.me
 * https://www.keepinspiring.me/quotes-about-change-in-life/
 */

import React from 'react';
import './App.css';
import quotes from './quotes.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allQuotes: quotes,
      quote:
        "It is better to live your own destiny imperfectly than to live an imitation of somebody else's life with perfection.",
      author: 'Anonymous,Bhagavad Gita',
    };

    this.handleNewQuote = this.handleNewQuote.bind(this);
  }

  handleNewQuote() {
    let num = Math.floor(Math.random() * 30);
    this.setState({
      quote: this.state.allQuotes[num + 1].quote,
      author: this.state.allQuotes[num + 1].author,
    });
  }

  render() {
    return (
      <div id="quote-box">
        <div id="text">{this.state.quote}</div>
        <div id="author">{this.state.author}</div>
        <div id="wrapper">
          <div id="new-quote" onClick={this.handleNewQuote}>
            New Quote <i className="fas fa-arrow-right"></i>
          </div>
          <a href="https://www.twitter.com/intent/tweet" id="tweet-quote">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
