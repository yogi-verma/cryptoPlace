import { useState } from "react";
import { useSummary } from "use-react-summary";
import { Typewriter } from "react-simple-typewriter";
import "./summarizer.css";

const Summarizer = () => {
  const [inputText, setInputText] = useState("");
  const [wordLimit, setWordLimit] = useState(100);
  const { summarizeText, isLoading, error } = useSummary({
    text: inputText,
    words: wordLimit,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) {
      alert("Please enter some text to summarize.");
      return;
    }
  };

  return (
    <div className="summarizer-wrapper">
      <h1 className="summarizer-heading">
        Summarize Your <br />
        <span className="typewriter-text">
          <Typewriter
            words={[
              "Messages",
              "Texts",
              "Notes",
              "Paragraph",
            ]}
            loop={5} 
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <div className="summarizer-container">
        <form onSubmit={handleSubmit}>
          <div className="input-section">
            {/* <label htmlFor="textInput" className="input-label">
              Enter your text:
            </label> */}
            <textarea
              id="textInput"
              rows={8}
              placeholder="Paste your text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="text-area"
            />
          </div>
          <div className="control-group">
            <button type="submit" disabled={isLoading} className="summarize-button">
              {isLoading ? "Summarizing..." : "Summarize"}
            </button>
            <div className="word-limit">
            <label htmlFor="wordLimit" className="word-limit-label">
              Word Limit :
            </label>
            <input
              type="number"
              id="wordLimit"
              value={wordLimit}
              onChange={(e) => setWordLimit(Number(e.target.value))}
              className="word-limit-input"
            />
            </div>
          </div>
        </form>
        {error && <p className="error-message">Error: {error}</p>}
        {summarizeText && (
          <div className="result-section">
            <h3 className="result-heading">Summarized Text:</h3>
            <p className="result-text">{summarizeText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Summarizer;
