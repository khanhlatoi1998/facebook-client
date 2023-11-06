import React from 'react';


import './style/global.scss'
import './style/custom.scss';
import './style/loading.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './screens/HomePage';
import { routes } from './routes';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Header />
        <div className='pt-[55px]'>
          <Routes>
            {
              routes.map((route, idx) => {
                return (
                  <Route
                    key={idx}
                    path={route.path}
                    element={route.element}
                  ></Route>
                )
              })
            }
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
