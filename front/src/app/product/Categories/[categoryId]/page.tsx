import FilterProductsForm from "@/app/Components/FilterProductsForm/FilterProductsForm";
import ProductList from "@/app/Components/ProductsList/ProductsLIst";
import { fetchingProductByCategory } from "@/app/helpers/productBackHelper";

const Category = async ({ params }: { params: { categoryId: string } }) => {
    const productsByCategory = await fetchingProductByCategory(params.categoryId);

    return (
        <div className='w-full bg-white flex justify-center items-center h-full flex-col'>
            <div  className="max-w-[370px] md:max-w-[1500px] m-auto">
                <div className="my-6 max-w-[370px] md:max-w-[1500px] border-b-4 flex justify-center">
                    {
                        params.categoryId === "1" ? (
                            <h2 className="text-black text-xl md:text-4xl mb-3">SmarthPhones</h2>
                        ) : params.categoryId === "2" ? (
                            <h2 className="text-black text-xl md:text-4xl mb-3">Laptops</h2>
                        ) : params.categoryId === "3" ? (
                            <h2 className="text-black text-xl md:text-4xl mb-3">Tablets</h2>
                        ) : params.categoryId === "4" ? (
                            <h2 className="text-black text-xl md:text-4xl mb-3">Headphones</h2>
                        ) : params.categoryId === "5" ? (
                            <h2 className="text-black text-xl md:text-4xl mb-3">Cameras</h2>
                        ) : params.categoryId === "6" ? (
                            <h2 className="text-black text-xl md:text-4xl mb-3">Monitors</h2>
                        ) : params.categoryId === "7" ? (
                            <h2 className="text-black text-xl md:text-4xl mb-3">Storage</h2>
                        ) : params.categoryId === "8" ? (
                            <h2 className="text-black text-xl md:text-4xl mb-3">Accessories</h2>
                        ) : (
                            <h2>Categories</h2>
                        )
                    }
                </div>
                <div className='flex flex-col md:flex-row min-w-[1000px]'>
                    <div>
                        <FilterProductsForm/>
                    </div>
                    <div className="w-[370px] md:w-full sm:max-w-[800px] md:mx-auto flex flex-wrap justify-center md:justify-evenly md:gap-1 md:mb-11">
                        {
                            productsByCategory.map((product) => (
                                <ProductList
                                    key={product.id}
                                    name={product.name}
                                    price={product.price}
                                    image={product.image}
                                    id={product.id}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;