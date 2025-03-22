import { useAtom, atom } from 'jotai';
import { evaluate } from 'mathjs';
import { Textarea } from "@/components/ui/textarea";

// Jotai 原子，用于存储整个文本区域的输入和结果
const linesAtom = atom<{ input: string; result: string }>({ input: '', result: '' });

export function TextCalcApp() {
  const [lines, setLines] = useAtom(linesAtom);

  // 处理输入变化
  const handleInputChange = (value: string) => {
    const inputLines = value.split('\n');
    const resultLines = [];

    for (const line of inputLines) {
      let result = '';
      try {
        const evalResult = evaluate(line);
        result = `${line} = ${evalResult}`;
      } catch (error) {
        if (line !== "") {
          result = `${line} = Error`;
        }
      }
      resultLines.push(result);
    }

    setLines({ input: value, result: resultLines.join('\n') });
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-2 gap-4">
      <div className="flex flex-col space-y-2">
        <Textarea
          value={lines.input}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="输入公式, 例如: 20*10"
          className="w-full h-64" // Set a fixed height or use min-h and max-h as needed
        />
      </div>
      <div className="flex flex-col space-y-2">
        <Textarea
          value={lines.result}
          readOnly // Make the result textarea read-only
          className="w-full h-64" // Ensure the same height as the input textarea
        />
      </div>
    </div>
  );
}
