import Button from "../../ui/Button";
import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../api/apiRestaurant";

export async function action({ request, params }){
    console.log(request)
    console.log(params)
    const data = { priority: true };
    await updateOrder(params.orderId, data);
    return null;
}

function UpdateOrder() {
  const fectcher = useFetcher();

  return (
    <fectcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fectcher.Form>
  );
}

export default UpdateOrder;