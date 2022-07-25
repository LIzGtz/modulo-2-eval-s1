import React from "react"
import quotes from "./quotes.json"
import { useState, useEffect } from "react"
import './QuoteBox.css'

function QuoteBox() {    
    const getRandomIndex = (max) => {
        return Math.floor(Math.random() * (max - 1));
    }
    const colors = ['black', 'red', 'blue', 'green', 'purple'];

    const [quoteIndex, setQuoteIndex] = useState(getRandomIndex(quotes.length));
    const [colorIndex, setColorIndex] = useState(getRandomIndex(colors.length));

    const nextQuote = () => {
        let newQuoteIndex = getRandomIndex(quotes.length);
        let newColorIndex = getRandomIndex(colors.length);

        setQuoteIndex(newQuoteIndex);
        setColorIndex(newColorIndex);

        return newQuoteIndex;
    }

    useEffect(() => {
        document.body.style.backgroundColor = colors[colorIndex];
    });

    return <div className="quote-container">
        <p style={{color: colors[colorIndex]}}>"{quotes[quoteIndex].quote}"</p>
        <p style={{color: colors[colorIndex]}}>- {quotes[quoteIndex].author}</p>
        <button onClick={nextQuote}>Next</button>
    </div>
}

export default QuoteBox;