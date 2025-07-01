// import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from "./routes/AppRoutes";
// import { HashRouter } from 'react-router-dom';
// import { MemoryRouter } from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
      <AppRoutes />
      </BrowserRouter>

      // <HashRouter>
      //   <AppRoutes />
      // </HashRouter>

      // <MemoryRouter>
      //   <AppRoutes />
      // </MemoryRouter>

  )
}



export default App
