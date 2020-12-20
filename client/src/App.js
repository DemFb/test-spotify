import React, {Fragment} from 'react';
import './App.css';

import ListPlaylist from "./components/ListPlaylist";


function App() {
  return (
    <Fragment>

      <div className="container">
       <h1 className="text-center mt-5"> My spotify playlist</h1> 
        <ListPlaylist/>
      </div>
    </Fragment>
  );
}

export default App;
