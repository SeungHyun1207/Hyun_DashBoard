import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // 애플리케이션 내의 잠재적 문제 알아내기 위한 도구 StrictMode
    // Strict 모드를 사용하면 리액트가 자식 컴포넌트를 검사하고 잘못 사용된 부분을 우리에게 알려준다.
    // 이런 경고 메세지를 보면서 리액트를 사용하면 어플리케이션에 잠재된 문제를 미리 해결할 수 있을 것이다.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
