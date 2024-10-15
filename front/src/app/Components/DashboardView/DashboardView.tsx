"use client"
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Cookies from 'js-cookie'
import { useAuth } from "@/app/context/AuthContext";

export const DashboardView = () => {

    const router = useRouter();
    const { userData } = useAuth();

    const handleLoggedOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will have to Sing up again!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, logout!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Logout!",
                    icon: "success"
                });
                localStorage.removeItem("userToken")
                localStorage.removeItem("cart")
                Cookies.remove('token', { path: '/' });
                router.push("/login")
            }
        });
    }

    return (
        <div className="w-full bg-white flex justify-center p-5">
            <div className="max-w-[1500px] min-h-[800px] mx-auto w-full flex flex-col justify-evenly items-center text-2xl rounded-md shadow-xl">
                <div>
                    <h2 className="font-bold  md:text-[50px]">Welcome to your dashboard!</h2>
                </div>
                <div className="flex flex-col md:flex-row w-3/4 md:w-1/2 justify-center md:justify-evenly items-center border-gray-200 border-2 p-2 rounded-md shadow-xl content-center">
                    <h2 className="w-1/2 text-center">Name:</h2>
                    <h2 className="w-1/2 text-center">{userData?.user.name}</h2>
                </div>
                <div className="flex flex-col md:flex-row w-3/4 md:w-1/2 justify-center md:justify-evenly items-center border-gray-200 border-2 p-2 rounded-md shadow-xl content-center">
                    <h2 className="w-1/2 text-center">Email address:</h2>
                    <h2 className="w-1/2 text-center truncate">{userData?.user.email}</h2>
                </div>
                <div className="flex flex-col md:flex-row w-3/4 md:w-1/2 justify-center md:justify-evenly items-center border-gray-200 border-2 p-2 rounded-md shadow-xl content-center">
                    <h2 className="w-1/2 text-center">Address:</h2>
                    <h2 className="w-1/2 text-center">{userData?.user.address}</h2>
                </div>
                <div className="flex flex-col md:flex-row w-3/4 md:w-1/2 justify-center md:justify-evenly items-center border-gray-200 border-2 p-2 rounded-md shadow-xl content-center">
                    <h2 className="w-1/2 text-center">Phone:</h2>
                    <h2 className="w-1/2 text-center">{userData?.user.phone}</h2>
                </div>
                <div className="flex flex-col md:flex-row w-3/4 md:w-1/2 justify-center md:justify-evenly items-center border-gray-200 border-2 p-2 rounded-md shadow-xl content-center">
                    <h2 className="w-3/4 md:w-1/2 text-center">Orders:</h2>
                    {
                        userData?.user?.orders?.length === 0 ? (
                            <p className="w-1/2 text-center">You dont have any order yet</p>
                        ) : (
                            <p className="w-1/2 text-center"><a href="/dashboard/orders" className="text-blue-500">See your orders</a></p>
                        )
                    }
                </div>
                <button
                    onClick={handleLoggedOut}
                    className="w-1/4 bg-blue-600 p-2 rounded-md text-white shadow-lg hover:bg-blue-300"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default DashboardView;
