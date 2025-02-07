import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faLayerGroup, faBox, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons/faBoxesStacked";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons/faTruckFast";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons/faDollarSign";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`flex flex-col h-screen overflow-hidden text-gray-400 bg-gray-900 transition-all ${isOpen ? 'w-40' : 'w-16'}`}>
        <a className="flex items-center justify-center w-full px-3 mt-3" href="#" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>
          {isOpen && <span className="ml-2 text-sm font-bold">Sales System</span>}
        </a>
        <div className="w-full px-2 flex-grow">
          <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
            {menuItems.map(({ icon, label, route }) => (
              <Link
                key={label}
                to={route}
                className={`flex items-center w-full h-12 px-3 mt-2 hover:bg-gray-700 hover:text-gray-300 ${!isOpen ? "justify-center" : ""}`}
              >
                {typeof icon === "object" ? (
                  <FontAwesomeIcon icon={icon} className="text-lg " />
                ) : (
                  <svg
                    className="w-6 h-6 stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
                  </svg>
                )}
                {isOpen && <span className="ml-2 text-sm font-medium">{label}</span>}
              </Link>
            ))}
          </div>
        </div>
        <a className="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300" href="#">
          <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </a>
      </div>

    </div>
    </>
  );
};

const menuItems = [
  { label: "Home", icon: faHouse, route: "/" },
  { label: "Sale", icon: faDollarSign, route: "/" },
  { label: "Categories", icon: faLayerGroup, route: "/categories" },
  { label: "Suppliers", icon: faTruckFast, route: "/products" },
  { label: "Products", icon: faBox, route: "/products" },
  { label: "Sales", icon: faCartShopping, route: "/products" },
  { label: "Stock", icon: faBoxesStacked, route: "/products" },
  { label: "Workers", icon: faUserTie, route: "/docs" },
  { label: "Users", icon: faUsers, route: "/products" }
  
];

export default Sidebar;