import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const TextWithCode = ({ text }) => {

  const renderText = () => {
    const regex = /(```[\s\S]+?```|`[\s\S]+?`)/g;
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (part.startsWith('```') && part.endsWith('```')) {
        // Multiline code block
        const code = part.slice(3, -3).trim();
        return <SyntaxHighlighter key={index} language="python" style={docco}>{code}</SyntaxHighlighter>;
      } else if (part.startsWith('`') && part.endsWith('`')) {
        // Inline code
        const code = part.slice(1, -1).trim();
        return <code className='bg-slate-900 text-orange-300' key={index}>{code}</code>;
      }
      return part;
    });
  };

  return <div className='pl-7 pb-10 text-blue-300 p-3'>{renderText()}</div>;
};

export default TextWithCode;