import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="p-4">
      <LinkButton to="/menu">Back to menu</LinkButton>

      <p className="font-semibold mt-4">Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
