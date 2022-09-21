
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';

function App() {
  return (
    <>
      <NavBar>
        <CartWidget></CartWidget>
      </NavBar>
      <ItemListContainer greeting={"Hola!"}/>
     
    </>
  );
}

export default App;
