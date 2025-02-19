import ActionBar from "../components/ActionBar";
import BackButton from "../components/BackButton";
import CodeSlash from "../components/CodeSlash";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter/dist/cjs";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { useState } from "react";
import TextWithCode from "../components/TextWithCode";

function SolutionPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch (err) {
      console.log("Failed to copy!");
    }
  };
  const code = `
def is_divisable_by_two(result):
    return len([x for x in result if x % 2  == 0]) == len(result)

def is_palindrome(seq):
    return seq == seq[::-1]

def find_palindrome(numbers, target_sum, count, last_index, seq=[]):
    if count == 0:
        if sum(seq) == target_sum and is_palindrome(seq):
            return seq
        return None

    for idx in range(last_index + 1, len(numbers)):
            result = find_palindrome(numbers, target_sum, count - 1, idx, seq + [numbers[idx]])
            if result is not None and is_divisable_by_two(result):
                return result

    return None

def solution(numbers):
    return find_palindrome(numbers, 18, 5, -1, [])

print(solution([1, 2, 4, 7, 8, 9, 6, 5, 4, 7, 6, 3, 1, 4, 6, 5, 2]))
`
  const textWithCode = `We input a list of numbers into the \`solution\` function which calls the \`find_palindrome\` function with parameters of the \`numbers\`,
\`18\` for the target sum, \`5\` for the length of the subsequence, and \`-1\` for initalizing the index tracker. Within \`find_palindrome\` a loop is present with a
 recursive call that moves the window of the sequence while at the same time decreasing the count variable. The indexes of each item are kept unique and in increasing order by always starting the loop 1 element after the \`last_index\`. 
When the \`count\` variable equals zero, which indicates a length of 5 being reached, the sequence is analyzed to determine if it sums up to the target sum and is a palindrome.
 If it is, it is returned and if it also contains numbers that are all divisable by two the answer is achieved.`;
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
              className={`${
                !copied ? "bg-orange-500 hover:bg-orange-600" : "bg-green-500"
              } text-white font-bold py-2 px-4 rounded`}
            >
              {!copied ? "Copy Code" : "Copied!"}
            </button>
          </div>
        </div>
        <div className="p-10">
          <SyntaxHighlighter language="python" style={docco}>
            {code}
          </SyntaxHighlighter>
        </div>
        <h2 className="text-3xl pl-7 text-orange-300">Solution Explanation:</h2>
        <br></br>
        <TextWithCode text={textWithCode} />
      </div>
    </div>
  );
}
export default SolutionPage;
