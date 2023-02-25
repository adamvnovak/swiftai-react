import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import faqPath from './faq.md'

function Faq() {
  const [postMarkdown, setPostMarkdown] = useState('');

  // useEffect with an empty dependency array (`[]`) runs only once
  useEffect(() => {
    fetch(faqPath)
      .then((response) => response.text())
      .then((text) => {
        // Logs a string of Markdown content.
        // Now you could use e.g. <rexxars/react-markdown> to render it.
        // console.log(text);
        setPostMarkdown(text);
      });
  }, []);

  return (
    <div >
      <ReactMarkdown>
        {postMarkdown}    
      </ReactMarkdown>
    </div>
  );
}

export default Faq;