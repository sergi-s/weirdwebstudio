import { FaPen } from "react-icons/fa";
const Hero = () => {
    return (
        <div className="text-white">
            <div className='max-w-[870px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center items-center'>

                <h1 className="capitalize md:text-4xl sm:text-3xl text-1xl font-bold py-7 text-center">SITES THAT DELIVER GOALS FOR YOUR BUSINESS</h1>
                <p className="p-2 font-bold overflow-visible text-center max-w-[700px]">Creation of stylish, concise sites with a clear structure, convenient navigation, and high loading speed</p>
                <div className='my-10 bg-white p-4 rounded-full'>
                    <div className='text-xl text-gray-800'>
                        <FaPen />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero