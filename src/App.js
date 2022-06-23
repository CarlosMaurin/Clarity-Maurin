import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from './components/Cart';
import MyCartContext from './context/CartContext';


function App() {
  return (
    <>

    
    <BrowserRouter>
    <MyCartContext>
    <Nav/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/Home' element={<ItemListContainer/>} />
      <Route path='/categoria/:categoryid' element={<ItemListContainer/> } />
      <Route path='/producto/:id' element={<ItemDetailContainer/> } />
      <Route path='/cart' element={<Cart/>} />


      {/* <Route path='/categories/:category' element={itemlistcontainer pero con productos filtrados} />
      <Route path='/detail/:id' element={itemdetailcontainer} />
      <Route path='/cart' element={cart} />
      <Route path='' element={} />
      <Route path='' element={} /> */}
    </Routes> 
    </MyCartContext>
    {/* <Footer/> */}
    </BrowserRouter>



      {/* <Nav></Nav>
      <ItemListContainer/>
      <ItemDetailContainer/> */}
    </>
  );
}

export default App;
