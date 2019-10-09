import React from 'react';
import './App.css';
import RouterComponent from './pages/router';
function App() {
  return (
    <div className="App">
      <RouterComponent />
      {/* 组件名字 能够自动生成并且自动引用 */}
      {/* <CitiesComponent />
      <CitySearchComponent /> */}
    </div>
  );
}

export default App;
