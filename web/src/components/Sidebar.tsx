import React from 'react';
import { useAuthStore } from '../store/authStore';
import { APP_NAME, APP_VERSION } from '../configs/constants';

const menuItems = [
    { icon: "grid_view", label: "Overview", url: "/dashboard" },
    { icon: "swap_horiz", label: "Transactions", url: "/dashboard" },
    { icon: "group", label: "Customers", url: "/dashboard" },
    { icon: "assessment", label: "Reports", url: "/dashboard" },
    { icon: "settings", label: "Settings", url: "/dashboard" },
    { icon: "code", label: "Developer", url: "/dashboard" }
];
export default function Sidebar() {
    const logout = useAuthStore((state) => state.logout);
    const user = useAuthStore((state) => state.user);

    return (
        <div className="w-64 bg-secondary text-white h-screen p-4 flex flex-col">
            <div className="mb-8">
                <h1 className="text-2xl font-bold">{APP_NAME} v{APP_VERSION}</h1>
            </div>
            <nav className="flex-1">
                {menuItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.url}
                        className="flex items-center gap-3 p-3 rounded hover:bg-blue-800 transition-colors"
                    >
                        <span className="material-symbols-outlined">{item.icon}</span>
                        {item.label}
                    </a>
                ))}
            </nav>
            <div className="border-t border-blue-800 pt-4">
                <div className="mb-4 px-3">
                    <p className="text-sm opacity-80">Logged in as</p>
                    <p className="font-medium">{user?.name}</p>
                </div>
                <button
                    onClick={logout}
                    className="flex items-center gap-3 p-3 w-full rounded hover:bg-blue-800 transition-colors text-left"
                >
                    <span className="material-symbols-outlined">logout</span>
                    Logout
                </button>
            </div>
        </div>
    );
}