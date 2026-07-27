import ProductList from "../ProductList";

function AllProduct() {
  return (
    <ProductList
      filterType="all"
      title="All Products"
      description="Complete Product Catalog:"
    />
  );
}

export default AllProduct;
