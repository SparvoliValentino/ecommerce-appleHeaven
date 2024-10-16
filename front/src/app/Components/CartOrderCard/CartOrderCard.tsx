export const CartOrderCard = ({name, price,image, onDelete} : {name:string , price:number , image:string, onDelete: () => void}) => {
    
    const handleDeleteProduct = () => {
        // Obtenemos el array de productos desde localStorage
        const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');

        // Filtramos el producto a eliminar basado en una propiedad única
        const updatedProducts = storedProducts.filter((product: { name: string; price: number; image: string }) => {
            return product.name !== name; // Podrías usar otra propiedad si es más única, como id
        });

        // Guardamos el nuevo array en localStorage
        localStorage.setItem('products', JSON.stringify(updatedProducts));

        // Opcionalmente puedes agregar una notificación o recargar el componente
        console.log(`${name} eliminado del carrito.`);
    };
    
    return (
        <div className="w-3/4 max-w-3/4 flex flex-col min-h-[250px] justify-evenly items-center">
            <div className="md:w-[700px] shadow-md md:shadow-xl flex flex-col md:flex-row justify-evenly items-center p-3 border-gray-200 border-2 rounded-3xl">
                <div className="w-3/4 flex md:flex-col justify-between items-center  p-1">
                    <h2 className="md:items-center justify-center  content-center">{name}</h2>
                    <img
                        src={image}
                        alt=""
                        className="shadow-md rounded-xl w-[100px] h-[100px]"
                    />
                </div>
                <div className="w-3/4 flex md:flex-col md:min-h-[125px] h-full justify-between items-center p-1">
                    <h2>Price:</h2>
                    <p>{price}</p>
                </div>
                <div className="w-3/4 flex md:flex-col md:min-h-[125px] h-full justify-between items-center p-1">
                    <h2>Eliminate product:</h2>
                    <button onClick={onDelete} className=" w-[25px] h-[25px] md:w-[50px] md:h-[50px] bg-red-50 rounded-full hover:bg-red-400 shadow-sm">X</button>
                </div>
            </div>
        </div>
    )
}

export default CartOrderCard;