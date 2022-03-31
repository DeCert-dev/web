import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MoralisProvider } from 'react-moralis';

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://yzfzc07ju6kr.usemoralis.com:2053/server" appId="yohMP8fh7GApV4KQ4cGRYWTTtpycmiLSX1d6wjO7">
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
