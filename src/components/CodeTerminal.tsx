import { motion } from "motion/react";
import { useEffect, useState } from "react";

const codeLines = [
  { line: 1, content: 'const ', highlight: 'figmaDesigner', content2: ' = {' },
  { line: 2, content: '  name: ', highlight: "'Adin'", content2: ',' },
  { line: 3, content: '  role: ', highlight: "'Figma Designer'", content2: ',' },
  { line: 4, content: '  skills: [' },
  { line: 5, content: "    ", highlight: "'Figma'", content2: ", ", highlight2: "'UI/UX'", content3: "," },
  { line: 6, content: "    ", highlight: "'React'", content2: ", ", highlight2: "'TypeScript'", content3: "," },
  { line: 7, content: "    ", highlight: "'Tailwind CSS'", content2: ", ", highlight2: "'3D Design'", content3: "," },
  { line: 8, content: '  ],' },
  { line: 9, content: '  hireable: ', highlight: 'true', content2: ',' },
  { line: 10, content: '  passion: ', highlight: "'Creating amazing experiences'", content2: '' },
  { line: 11, content: '};' },
];

// Flatten all code into a single string for typing
const getFullText = () => {
  return codeLines.map(line => {
    return line.content + (line.highlight || '') + (line.content2 || '') + (line.highlight2 || '') + (line.content3 || '');
  }).join('\n');
};

export function CodeTerminal() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const fullText = getFullText();

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 30); // Speed of typing

      return () => clearTimeout(timeout);
    } else {
      // Wait 2 seconds then restart
      const timeout = setTimeout(() => {
        setTypedText("");
        setCurrentIndex(0);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Parse typed text back into lines
  const typedLines = typedText.split('\n');

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Terminal Window */}
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-xl border border-purple-500/20 shadow-2xl shadow-purple-500/20">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1e1e2e]/80 border-b border-gray-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex-1 text-center text-xs text-gray-400">
            dev_profile.tsx
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm min-h-[400px]">
          {typedLines.map((lineText, index) => {
            if (!lineText && index === typedLines.length - 1) return null;
            
            const originalLine = codeLines[index];
            if (!originalLine) return null;

            const isLastLine = index === typedLines.length - 1;
            const displayText = lineText;

            return (
              <div key={index} className="flex gap-6 mb-2">
                <span className="text-gray-600 select-none w-6 text-right">{originalLine.line}</span>
                <div className="flex-1">
                  {renderLineWithSyntax(displayText, originalLine, isLastLine && showCursor)}
                </div>
              </div>
            );
          })}
          
          {currentIndex >= fullText.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-6 mt-4"
            >
              <span className="text-gray-600 select-none w-6"></span>
              <div className="flex items-center gap-4 text-xs">
                <span className="text-purple-400">✓ 0 errors</span>
                <span className="text-yellow-400">⚠ 0 warnings</span>
                <span className="text-blue-400">TypeScript React UTF-8</span>
                <span className="text-green-400">Ln {codeLines.length}, Col 3</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-2 bg-green-500 rounded-full"
                />
              </div>
            </motion.div>
          )}
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 pointer-events-none" />
      </div>

      {/* 3D Shadow Effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 blur-2xl -z-10 rounded-xl" />
    </motion.div>
  );
}

function renderLineWithSyntax(displayText: string, originalLine: any, showCursor: boolean) {
  let text = displayText;
  const parts = [];
  
  // Find positions of highlights in the original line
  const fullOriginal = originalLine.content + (originalLine.highlight || '') + (originalLine.content2 || '') + (originalLine.highlight2 || '') + (originalLine.content3 || '');
  
  let currentPos = 0;
  
  // Add content before first highlight
  if (originalLine.content) {
    const endPos = Math.min(currentPos + originalLine.content.length, text.length);
    if (endPos > currentPos) {
      parts.push(<span key="content" className="text-gray-300">{text.substring(currentPos, endPos)}</span>);
      currentPos = endPos;
    }
  }
  
  // Add first highlight
  if (originalLine.highlight && currentPos < text.length) {
    const endPos = Math.min(currentPos + originalLine.highlight.length, text.length);
    if (endPos > currentPos) {
      parts.push(<span key="highlight" className="text-green-400">{text.substring(currentPos, endPos)}</span>);
      currentPos = endPos;
    }
  }
  
  // Add content2
  if (originalLine.content2 && currentPos < text.length) {
    const endPos = Math.min(currentPos + originalLine.content2.length, text.length);
    if (endPos > currentPos) {
      parts.push(<span key="content2" className="text-gray-300">{text.substring(currentPos, endPos)}</span>);
      currentPos = endPos;
    }
  }
  
  // Add second highlight
  if (originalLine.highlight2 && currentPos < text.length) {
    const endPos = Math.min(currentPos + originalLine.highlight2.length, text.length);
    if (endPos > currentPos) {
      parts.push(<span key="highlight2" className="text-green-400">{text.substring(currentPos, endPos)}</span>);
      currentPos = endPos;
    }
  }
  
  // Add content3
  if (originalLine.content3 && currentPos < text.length) {
    const endPos = Math.min(currentPos + originalLine.content3.length, text.length);
    if (endPos > currentPos) {
      parts.push(<span key="content3" className="text-gray-300">{text.substring(currentPos, endPos)}</span>);
      currentPos = endPos;
    }
  }
  
  return (
    <>
      {parts}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-green-400 ml-0.5"
        />
      )}
    </>
  );
}
