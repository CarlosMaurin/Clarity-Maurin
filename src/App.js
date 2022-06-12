import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Nav from './components/Nav';
// import { Route, Routes} from "react-router-dom";


function App() {
  return (
    <>

    {/* <Routes>
      <Route path='' element={} />
      <Route path='' element={} />
      <Route path='' element={} />
      <Route path='' element={} />
      <Route path='' element={} />
      <Route path='' element={} />
    </Routes> */}



      <Nav></Nav>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
