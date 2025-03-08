import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import type {Props} from '@theme/CodeBlock/Line';

import styles from './styles.module.css';

export default function CodeBlockLine({
  line,
  symbol: symbolProp,
  classNames,
  showLineNumbers,
  showLineSymbols,
  getLineProps,
  getTokenProps,
}: Props): ReactNode {
  if (line.length === 1 && line[0]!.content === '\n') {
    line[0]!.content = '';
  }

  const lineProps = getLineProps({
    line,
    className: clsx(classNames, (showLineNumbers || showLineSymbols) && styles.codeLine),
  });

  const lineTokens = line.map((token, key) => (
    <span key={key} {...getTokenProps({token})} />
  ));

  const symbol = symbolProp

  console.log(symbol)

  return (
    <span {...lineProps}>
      {showLineNumbers ? (
        <>
          <span className={styles.codeLineNumber}></span>
          <span className={styles.codeLineContent}>{lineTokens}</span>
        </>
      ) : showLineSymbols ? (
        <>
        <span className={styles.codeLineSymbol} sym={symbol}></span>
        <span className={styles.codeLineContent}>{lineTokens}</span>
      </>
      ) : (
        lineTokens
      )}
      <br />
    </span>
  );
}
