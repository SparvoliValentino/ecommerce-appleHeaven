import Register from "../Components/Register/Register"

const RegisterView: React.FC = () => {
    return (
        <div className="w-full bg-gray-100 p-4">
            <div className="max-w-[1500px] min-h-screen bg-white m-auto mb-6 rounded-md border-gray-400 border-1 md:shadow-full-inset flex flex-col justify-evenly items-center">
                <div className="my-8 flex flex-col justify-center items-center">
                    <h2 className="text-3xl text-center mb-3 md:text-[60px] md:mb-10 font-bold">Welcome to Apple Heaven!</h2>
                    <h3 className="text-xl p-2 text-center text-gray-600 md:p-0 md:text-[30px] italic">Please Register before continue with your activities</h3>
                </div>
                <div className="mb-10">
                    <Register />
                </div>
            </div>
        </div>
    )
}

export default RegisterView;