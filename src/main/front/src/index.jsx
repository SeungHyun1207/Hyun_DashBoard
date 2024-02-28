import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 *  @작성자 : 강승현
 *  @작성일 : 2024-02-28
 *  1. React.StrictMode
 *  애플리케이션 내의 잠재적 문제 알아내기 위한 도구 StrictMode
 *  Strict 모드를 사용하면 리액트가 자식 컴포넌트를 검사하고 잘못 사용된 부분을 우리에게 알려준다.
 *  이런 경고 메세지를 보면서 리액트를 사용하면 어플리케이션에 잠재된 문제를 미리 해결할 수 있을 것이다.
 *  2. BrowserRouter
 *  HTML5의 History API를 사용하여 클라이언트 측 라우팅을 구현합니다. 이는 URL 경로의 변화에 따라 적절한 React 컴포넌트를 렌더링한다.
 *  HTML5 History API 사용: BrowserRouter는 HTML5 History API를 기반으로 동작합니다. 이 API는 브라우저 세션 내에서 URL을 변경할 수 있는 기능을 제공합니다.
 *  서버 측 설정 필요 없음: BrowserRouter를 사용하는 경우, 서버 측에서 추가적인 설정이 필요하지 않습니다. 모든 경로는 클라이언트에서 처리됩니다.
 *  새로고침 문제: BrowserRouter를 사용할 때, 서버에 URL 경로에 대한 요청이 오면 해당 요청에 대한 적절한 응답을 설정해야 합니다. 이는 서버 측 라우팅 설정에 관련이 있습니다.
 *  주의 사항: BrowserRouter를 사용할 때는 서버 구성에 주의해야 합니다. 라우트된 URL에 직접 접근할 때 서버는 정적 파일이나 애플리케이션의 진입점을 반환해야 합니다.
 *  3. Routes , Route
 *  라우팅 정의: <Routes> 컴포넌트를 사용하여 라우팅을 정의합니다. 이 컴포넌트 안에 <Route> 컴포넌트들을 중첩하여 사용합니다. 각 <Route>는 경로와 해당 경로에 맞는 컴포넌트를 정의합니다.
 *  경로 설정: <Route> 컴포넌트의 path 속성을 사용하여 경로를 지정합니다. 이 속성은 URL의 일부를 나타내며, 해당 경로에 맞는 컴포넌트를 렌더링합니다.
 *  중첩 라우팅: <Routes> 안에 중첩된 <Routes>를 사용하여 중첩된 라우팅을 구현할 수 있습니다. 이를 통해 복잡한 애플리케이션의 라우팅 구조를 정의할 수 있습니다.
 *  경로 매칭: 라우팅은 정의된 순서대로 매칭됩니다. 따라서 가장 먼저 매칭되는 경로가 사용됩니다. 이는 Switch 컴포넌트를 사용하지 않아도 됨을 의미합니다.
 *  Fallback 경로: <Routes> 컴포넌트 안에 <Route> 컴포넌트를 사용하여 Fallback 경로를 설정할 수 있습니다. 이는 모든 경로에 일치하지 않을 때 렌더링됩니다.
 */
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route>
                  <App />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
