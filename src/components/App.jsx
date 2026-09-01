import Banner from "./Banner.jsx";
import Cart from "./Cart.jsx";
import ShoppingList from "./ShoppingList.jsx";
import "../styles/App.css";

function App() {
    return (
        <>
            <Banner title="La maison jungle" />
            <div className="page-content">
                <Cart />
                <ShoppingList></ShoppingList>
            </div>
        </>
    );
}

export default App;
