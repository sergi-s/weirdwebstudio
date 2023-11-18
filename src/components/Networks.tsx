import { FaViber, FaFacebook, FaTelegram } from 'react-icons/fa'

const Networks = () => {
    return (
        <div className="fixed left-10 bottom-10 flex flex-col items-start p-4 space-y-4">
            <div className="p-2 rounded-full">
                <FaFacebook className="text-white text-4xl" />
            </div>
            <div className="p-2 rounded-full">
                <FaTelegram className="text-white text-4xl" />
            </div>
            <div className="p-2 rounded-full">
                <FaViber className="text-white text-4xl" /> {/* Replace with Fiber icon */}
            </div>
        </div>
    )
}

export default Networks
