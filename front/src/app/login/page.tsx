import Login from "../Components/Login/Login";

const LoginView: React.FC = () => {
    return (
        <div className="w-full bg-gray-100 p-4">
            <div className="max-w-[1500px] min-h-[720px] bg-white m-auto md:mb-6 rounded-md border-gray-400 border-1 shadow-full-inset flex flex-col justify-center items-center">
                <div className=" flex flex-col justify-center items-center">
                    <h2 className="text-3xl text-center mb-5 md:text-[60px] font-semibold">Welcome back to Apple Heaven!</h2>
                    <h3 className="text-xl p-2 text-center text-gray-600 md:p-0 md:text-[30px] italic">Please Log in before continue with your activities</h3>
                </div>
                <div className="md:mb-5 p-10">
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default LoginView;