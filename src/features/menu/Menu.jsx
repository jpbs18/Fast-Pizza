import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../api/apiRestaurant";
import MenuItem from "./MenuItem";

export const loader = async () => {
  const data = await getMenu();
  return data;
};

function Menu() {
  const menu = useLoaderData();
  return (
    <ul className="divide-y divide-stone-200 p-3">
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export default Menu;
