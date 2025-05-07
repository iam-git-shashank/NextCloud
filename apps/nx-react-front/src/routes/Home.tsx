import { useList, useOne, useTable } from "@refinedev/core";
import { useNavigate } from "react-router-dom";
export default function Home() {
  
  const navigate=useNavigate()
  const { data, isLoading } = useList({
    resource: "products",
    pagination: { current: 1, pageSize: 10 },
  });

  if(isLoading){
    return <div>Loading......</div>
  }
  else {
    console.log(data)
  }

  return <div>
     <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
<button onClick={() => navigate(`/my-products/${product.id}`)}>
  View
</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

   
  </div>;
}
