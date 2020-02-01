import React, { useState, useCallback } from 'react';
import { SkillContext } from './components/skill-context';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from './components/Landing';
import NavBar from './components/NavBar';

const App = () => {
  const [search, setSearch] = useState("");

  const searched = useCallback((searchText) => {
    setSearch(searchText);
  }, []);

  return (
    <SkillContext.Provider value={{ search: search, searched: searched }}>
      <NavBar />
      <Landing />
    </SkillContext.Provider>
  );
}

export default App;
