import React from 'react';
import { useState } from 'react';
import '../Stylesheets/Generator.scss';

function Generator() {
    const [quote, setQuote] = useState("");

    const newQuote = async () => {
        try{
            const response = await fetch('https://api.quotable.io/random');
            const quote = await response.json();
            setQuote(quote);
        }catch(error){
            console.log(error);
        }
    };

    return (
        <div className="generator">
            <div className="quote-container">
                <p>
                    "{quote.content}"
                </p>
                <h4>- {quote.author}</h4>
                <button onClick={newQuote}>New Quote</button>
            </div>
        </div>
    )
}

export default Generator
