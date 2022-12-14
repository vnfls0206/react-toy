import React from "react";
import loadable from '@loadable/component';
import Loader from "../components/layout/Loader";

const ReactQueryContainer = loadable(() => import('./ReactQueryContainer'), {fallback: <Loader/>});

function App() {
  return (
      <ReactQueryContainer/>
  );
}

export default App;
