import { desktopMenuItems } from "@/common/data/data";
import Link from "next/link";
import { FiX } from "react-icons/fi";

const SideModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[400px] bg-white z-50 shadow-lg transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } flex flex-col`}
    >
      <div className="flex justify-start p-4">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close sidebar"
        >
          <FiX size={24} />
        </button>
      </div>

      <div className="pt-0 flex-grow">
        <ul>
          {desktopMenuItems.map((item, index) => (
            <li key={index} className="text-center">
              <Link
                href={item.href}
                className="block text-blue-950 font-bold hover:bg-blue-950 p-1 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideModal;
