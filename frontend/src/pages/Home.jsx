import Carousel from "../components/Carousel";
import { useEffect } from "react";
import { useAllProductsQuery } from "../redux/api/productApiSlice";
import { useFetchCategoriesQuery } from "../redux/api/categoryApiSlice";
import Card from "../components/Card";

const Home = () => {
  const {
    data: products,
    isLoading: isProductsLoading,
    isError: isProductsError,
    refetch: refetchProducts,
  } = useAllProductsQuery();
  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
    refetch: refetchCategories,
  } = useFetchCategoriesQuery();

  useEffect(() => {
    refetchProducts();
    refetchCategories();
  }, [refetchProducts, refetchCategories]);

  if (isProductsLoading || isCategoriesLoading) return <div>Loading .....</div>;
  if (isProductsError || isCategoriesError) return <div>Error..</div>;

  return (
    <div>
      <Carousel />
      <div className="container w-[80%] mx-auto">
        {categories.length > 0 &&
          categories.map((category) => (
            <div key={category._id} className="p-2">
              <div className="text-xl mb-4">{category.CategoryName}</div>
              <hr />
              <br />
              <div className="flex flex-wrap ">
                {products
                  .filter((product) => product.CategoryName === category._id)
                  .map((filterItem) => (
                    <div key={filterItem._id} className="m-2">
                      <Card
                        foodItem={filterItem}
                        options={filterItem.options[0]}
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
