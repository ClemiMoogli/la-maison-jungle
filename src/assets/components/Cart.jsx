const Cart = () => {
  const monstera = 8;
  const lierre = 10;
  const bouquet = 15;

  return (
  <div>
    <h2>Panier</h2>
      <ul>
        <li>Monstera: {monstera}$</li>
        <li>lierre: {lierre}$</li>
        <li>bouquet: {bouquet}$</li>
      </ul>
      <p>Total: {monstera + lierre + bouquet}$</p>
  </div>
  );
}

export default Cart

