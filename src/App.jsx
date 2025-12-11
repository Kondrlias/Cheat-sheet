import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Book from './components/Book';
import Home from './components/Home';
import NoContent from './components/NoContent';
import Components from './components/pages/Components';
import Events from './components/pages/Events';
import Forms from './components/pages/Forms';
import Fragment from './components/pages/Fragment';
import Key from './components/pages/Key';
import LifeCycle from './components/pages/LifeCycle';
import Memo from './components/pages/Memo';
import Props from './components/pages/Props';
import Refs from './components/pages/Refs';
import Router from './components/pages/Router';
import State from './components/pages/State';
import UseContext from './components/pages/UseContext';
import UseMemo from './components/pages/UseMemo';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />}>
          <Route index path="components" element={<Components />} />
          <Route path="props" element={<Props />} />
          <Route path="state" element={<State />} />
          <Route path="lifecycle" element={<LifeCycle />} />
          <Route path="events" element={<Events />} />
          <Route path="key" element={<Key />} />
          <Route path="fragment" element={<Fragment />} />
          <Route path="memo" element={<Memo />} />
          <Route path="use-context" element={<UseContext />} />
          <Route path="use-memo" element={<UseMemo />} />
          <Route path="router" element={<Router />} />
          <Route path="forms" element={<Forms />} />
          <Route path="refs" element={<Refs />} />
        </Route>
        <Route path="*" element={<NoContent />} />
      </Routes>
    </div>
  );
}

export default App;
