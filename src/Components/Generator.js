import React from 'react';
import { useState } from 'react';
import '../Stylesheets/Generator.scss';

function Generator() {
    const [quote, setQuote] = useState("");
    const [displayQuote, setDisplayQuote] = useState(false);

    const newQuote = async () => {
        try{
            const response = await fetch('https://api.quotable.io/random');
            const quote = await response.json();
            const displayQuote = () => setDisplayQuote(true);

            setQuote(quote);
            setDisplayQuote(displayQuote);
        }catch(error){
            console.log(error);
        }
    };

    return (
        <div className="generator">
            <div className="quote-container">
                <p className="text">
                    {displayQuote ? quote.content : "Click the button below to generate a new quote."}
                </p>
                <h4 className="text">
                    {displayQuote ? "- " + quote.author : ""}
                </h4>
                <button className="gen-btn" onClick={newQuote}>New Quote</button>
            </div>
        </div>
    )
}

export default Generator
