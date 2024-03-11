import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import A001 from './patternA/Sample001';
import A002 from './patternA/Sample002';
import B101 from './patternB/Sample101';
import B102 from './patternB/Sample102';

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path={`/`} element={<Home />} />
      <Route path={`/patternA001`} element={<A001 />} />
      <Route path={`/patternA002`} element={<A002 />} />
      <Route path={`/patternB101`} element={<B101 />} />
      <Route path={`/patternB102`} element={<B102 />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
