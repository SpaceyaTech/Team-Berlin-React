import React from 'react';
interface LinkProps {
  text: string;
  url: string;
}

export const Link = ({ text, url }: LinkProps) => {
  return (
    <a key={text} href={url} target="_self">
      {text}
    </a>
  );
};
