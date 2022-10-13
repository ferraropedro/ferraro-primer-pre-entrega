import './App.css';
import Navbar from './componentes/header/NavBar';
import ItemDetailContainer from './componentes/main/ItemDetailContainer';
import ItemListContainer from './componentes/main/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './componentes/cart/Cart'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryName' element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;