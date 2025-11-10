'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneSea, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from './ThemeProvider';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'html' }: CodeBlockProps) {
  const { theme } = useTheme();

  return (
    <div className="code-block relative group" suppressHydrationWarning>


      {/* Code Content */}
      <div className="overflow-hidden rounded-b-lg">
        <SyntaxHighlighter
          language={language}
          style={theme === 'dark' ? duotoneSea : coy}
          customStyle={{
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            padding: '1.5rem',
            fontSize: '0.875rem',
            lineHeight: '1.7142857'
          }}
          wrapLines={true}
          wrapLongLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
