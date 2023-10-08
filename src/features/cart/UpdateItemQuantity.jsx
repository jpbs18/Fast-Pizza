import { useDispatch } from "react-redux";
import Button from "../../ui/Button"
import PropType from "prop-types";
import { increaseQuantity, decreaseQuantity } from "./cartSlice";

function UpdateItemQuantity({ id, currentQuantity }) {
    const dispatch = useDispatch();

    return (
      <div className="flex gap-2 items-center md:gap-3">
        <Button type="round" onClick={() => dispatch(decreaseQuantity(id))}>
          -
        </Button>
        <span className="text-sm font-medium">{currentQuantity}</span>
        <Button type="round" onClick={() => dispatch(increaseQuantity(id))}>
          +
        </Button>
      </div>
    );
}

export default UpdateItemQuantity;

UpdateItemQuantity.propTypes = {
    id: PropType.number,
    currentQuantity: PropType.number
}
