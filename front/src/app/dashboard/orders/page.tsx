import OrdersView from "@/app/Components/OrdersView/OrdersView";

const OrdersPage = () => {
    return(
        <div className="w-screen flex flex-col bg-white">
            <div className="w-3/4 md:max-w-[1500px] md:min-h-[700px] mx-auto">
                <div className="my-6 md:min-w-[1500px] flex flex-col justify-center items-center content-center">
                    <div className="border-b-4 w-full">
                        <h1 className="justify-center text-[35px] md:text-[50px] text-center p-1  font-semibold">Mis compras</h1>
                    </div>
                    <OrdersView />
                </div>
            </div>
        </div>
    )
    
    
};

export default OrdersPage;
