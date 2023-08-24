import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API;
  const [country, setcountry] = useState("us");
  const [progress, setprogress] = useState(0);

  const selIn = () => {
    setcountry("in");
    document.title = "The News Hour - (India)";
  }

  const selUs = () => {
    setcountry("us");
    document.title = "The News Hour - (United States)";
  }
  const selCanada = () => {
    setcountry("ca");
    document.title = "The News Hour - (Canada)";
  }

  return (
    <div>
      <Router>
        <Navbar selectIn={selIn} selectUs={selUs} selectCanada={selCanada} />
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setprogress(0)}
        />
        <Routes>
          <Route exact path='/'
            element={<News apikey={apikey} setProg={setprogress} country={country} key={`${country}-/`} category="general" />} >
          </Route>
          <Route exact path='/General'
            element={<News apikey={apikey} setProg={setprogress} country={country} key={`${country}-/general`} category="general" />} >
          </Route>
          <Route exact path='/Business'
            element={<News apikey={apikey} setProg={setprogress} country={country} key={`${country}-business`} category="business" />}>
          </Route>
          <Route exact path='/Sports'
            element={<News apikey={apikey} setProg={setprogress} country={country} key={`${country}-sports`} category="sports" />}>
          </Route>
          <Route exact path='/Entertainment'
            element={<News apikey={apikey} setProg={setprogress} country={country} key={`${country}-entertainment`} category="entertainment" />}>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App; 