"use client"
import { useAuth } from "@/app/context/AuthContext";
import { getOrders } from "@/app/helpers/ordersHelper";
import { IOrder } from "@/app/interfaces/IOrder";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const OrdersView = () => {
    const router = useRouter();
    const [orders, setOrders] = useState<IOrder[]>([]);
    const { userData } = useAuth();

    const fetchData = async () => {
        if (userData?.token) { // Verificar que userData y token están definidos
            try {
                const response = await getOrders(userData.token);
                setOrders(response);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        } else {
            console.error("Token is missing. Cannot fetch orders.");
            router.push("/login");
        }
    };

    useEffect(() => {
        if (userData?.user?.name) {
            userData?.user.name === undefined ? router.push("/login") : fetchData();
        }
    }, [userData?.user, router, fetchData]);

    return (
        <div className="w-screen flex flex-col bg-white">
            <div className="w-3/4 md:max-w-[1500px] md:min-h-[700px] mx-auto">
                <div className="my-6 md:min-w-[1500px] flex flex-col justify-center items-center content-center">
                    <div className="border-b-4 w-full">
                        <h1 className="justify-center text-[35px] md:text-[50px] text-center p-1  font-semibold">Mis compras</h1>
                    </div>
                    <div className="flex flex-col w-full justify-center content-center items-center mt-5">
                        {
                            orders && orders.length > 0 ? (
                                orders.map((order) => (
                                    <div className="w-full flex flex-col justify-center items-center content-center" key={order.id}> {/* Key agregada aquí */}
                                        <div className="md:w-3/4 flex flex-col md:flex-row p-2 gap-2 justify-evenly mt-4 border-gray-200 rounded-3xl shadow-sm md:shadow-xl border-2">
                                            <div className=" mt-0 flex flex-col justify-evenly min-h-full items-center p-2">
                                                <h2 className="text-xl md:text-xl">Products you bought:</h2>
                                                {order.products.map((product) => (
                                                    <ul className="flex flex-col w-full mt-1" key={product.id}> {/* Key agregada aquí */}
                                                        <li className="text-base text-center md:text-lg">{product.name}</li>
                                                    </ul>
                                                ))}
                                            </div>
                                            <div className="mt-0 flex flex-col min-h-full justify-evenly items-center">
                                                <h2 className="text-xl">Status of the order:</h2>
                                                <h2 className={order?.status === 'approved' ? 'text-green-500' : 'text-red-500'}>
                                                    {order?.status === 'approved' ? 'Order Approved' : 'Order Not Approved'}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div>
                                    No hay ordenes
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrdersView;
