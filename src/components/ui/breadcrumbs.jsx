import { Link } from "react-router-dom";

const Breadcrumbs = ({ links }) => {
    return (
        <div className="text-sm text-gray-500 mb-4">
            {links.map((link, index) => (
                <span key={index}>
                    {link.to ? (
                        <Link to={link.to} className="hover:underline text-gray-700">
                            {link.label}
                        </Link>
                    ) : (
                        <span className="text-gray-400">{link.label}</span>
                    )}
                    {index < links.length - 1 && <span className="mx-2">/</span>}
                </span>
            ))}
        </div>
    );
};

export default Breadcrumbs;
