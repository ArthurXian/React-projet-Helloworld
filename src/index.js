// src/index.js

import React from 'react';               // 导入 React
import ReactDOM from 'react-dom/client';  // 导入 ReactDOM
import './index.css';                    // 导入样式文件（如果需要）
import App from './App';                 // 导入 App 组件

// 通过 ReactDOM 渲染 App 组件到 HTML 的根节点
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

