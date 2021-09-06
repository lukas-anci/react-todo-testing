import React from 'react';
import './Header.css';

export default function Header({ title }) {
  return (
    <>
      <h1 data-testId="main-title" className="header">
        {title}
      </h1>
      <h4 title="second">Second title</h4>
    </>
  );
}
