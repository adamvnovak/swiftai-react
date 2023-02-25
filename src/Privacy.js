import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import privacyPath from './privacy.md'

function Privacy() {
  const [postMarkdown, setPostMarkdown] = useState('');

  // useEffect with an empty dependency array (`[]`) runs only once
  useEffect(() => {
    fetch(privacyPath)
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

export default Privacy;