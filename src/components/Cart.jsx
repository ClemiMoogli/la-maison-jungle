import "../styles/Cart.css";

const Cart = () => {
    const monstera = 8;
    const lierre = 10;
    const bouquet = 15;

    return (
        <div className="cart">
            <h2 className="cart-header">Panier</h2>
            <ul className="cart-list">
                <li>Monstera: {monstera}$</li>
                <li>lierre: {lierre}$</li>
                <li>bouquet: {bouquet}$</li>
            </ul>
            <p className="cart-footer">Total: {monstera + lierre + bouquet}$</p>
        </div>
    );
};

export default Cart;
