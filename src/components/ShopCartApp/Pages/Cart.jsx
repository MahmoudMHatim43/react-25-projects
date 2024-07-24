import React from "react";
import CartBox from "../Components/CartBox";
import { useSelector } from "react-redux";

function Cart() {
  const [totalPrice, setToatalPrice] = React.useState(0);
  const { cart } = useSelector((state) => state);

  React.useEffect(() => {
    setToatalPrice(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="bg-gray-300 overflow-hidden min-h-screen w-full">
      {cart && cart.length > 0 ? (
        <div className="min-h-screen grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {cart.map((item) => (
            <CartBox key={item.id} data={item} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Cart;
