import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";
import PropType from "prop-types";

function DeleteItem({ id }) {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteItem(id));
  };

  return (
    <div>
      <Button type="small" onClick={handleDeleteItem}>
        Delete
      </Button>
    </div>
  );
}

export default DeleteItem;

DeleteItem.propTypes = {
    id: PropType.number
}