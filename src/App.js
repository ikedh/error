
import './App.css';
import { Fragment } from 'react';

import Pokemon from './components/Pokemon';
import MiComponente from './components/MiComponente';
import { ErrorBoundary } from './utils/ErrorBoundary';

function App() {
  return (

    <Fragment>
      <Pokemon pokemon="Cleffairy" />

      <ErrorBoundary>
            <MiComponente />
      </ErrorBoundary>
    </Fragment>
  );
}

export default App;
