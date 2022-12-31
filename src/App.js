import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Terms from './pages/Terms';
import GetStarted from './pages/GetStarted'
import Services from './pages/Services';
import Chat from './pages/Chat'
import Feedback from './pages/Feedback';
import GetStartedFeedback from './pages/GetStartedFeedback';
import ServiceFeedback from './pages/ServiceFeedback';
import "swiper/css/bundle";

import './App.css';
import Home from './pages/Home';

import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/terms' element = {<Terms/>}/>
      <Route path='/start' element = {<GetStarted/>}/>
      <Route path='/services' element = {<Services/>}/>
      <Route path='/chat' element = {<Chat/>}/>
      <Route path='/feedback' element = {<Feedback/>}/>
      <Route path='/getfeedback' element = {<GetStartedFeedback/>}/>
      <Route path='/servicefeed' element = {<ServiceFeedback/>}/>


    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
