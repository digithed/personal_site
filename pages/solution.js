import ActionBar from "./components/ActionBar";
import { BackButton } from "./components/BackButton";
import CodeSlash from "./components/CodeSlash";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { code } from "./components/Code";
import { useState } from "react";

function SolutionPage() {
    const [copied, setCopied] = useState(false)

    const handleCopyClick = async () => {
        try {
          await navigator.clipboard.writeText(code);
          setCopied(true)
        } catch (err) {
          console.log("Failed to copy!");
        }
      };
  return (
    <div className="bg-slate-800 w-full min-h-screen">
      <ActionBar />
      <div className="text-center md:text-left ml-10 md:ml-20 pt-10">
        <CodeSlash />
        <div className="flex flex-row space-x-5">
          <div className="md:ml-10">
            <BackButton />
          </div>
          <div className="md:ml-10">
            <button
              onClick={handleCopyClick}
              className={`${!copied ? 'bg-orange-500 hover:bg-orange-600' : 'bg-green-500'} text-white font-bold py-2 px-4 rounded`}
            >
              {!copied ? 'Copy Code' : 'Copied!'}
            </button>
          </div>
        </div>
        <div className="p-10">
          <SyntaxHighlighter language="python" style={docco}>
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
export default SolutionPage;
