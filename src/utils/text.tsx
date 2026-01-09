import type { ReactNode } from "react";

export const processTextWithStrong = (text: string): ReactNode[] => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part) => {
    const key = part;
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={key}>{part.slice(2, -2)}</strong>;
    }
    return <span key={key}>{part}</span>;
  });
};

export const highlightPrice = (text: string): ReactNode => {
  const priceRegex =
    /((\d+(?:\+\d+)?)x\s+de\s+)(R\$\d+[.,]\d+)(\s*\([^)]+\))?/gi;
  const match = priceRegex.exec(text);

  if (!match || match.index === undefined) {
    return <span>{text}</span>;
  }

  const installments = match[1];
  const price = match[3];
  const cardInfo = match[4] || "";
  const beforeText = text.substring(0, match.index);
  const afterText = text.substring(match.index + match[0].length);

  return (
    <>
      {beforeText && <span>{beforeText}</span>}
      <span>{installments}</span>
      <span className="text-secondary-color font-bold text-base sm:text-xl">
        {price}
      </span>
      {cardInfo && (
        <span className="text-xs sm:text-sm opacity-75">{cardInfo}</span>
      )}
      {afterText && <span>{afterText}</span>}
    </>
  );
};
