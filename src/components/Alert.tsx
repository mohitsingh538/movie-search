import React, { createContext, useContext, useState, ReactNode } from "react";

interface AlertContextType {
    showAlert: (message: string) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlert = () => {
    const context = useContext(AlertContext);
    if (!context) {
        throw new Error("useAlert must be used within an AlertProvider");
    }
    return context;
};

export const AlertProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [alertMessage, setAlertMessage] = useState<string | null>(null);

    const showAlert = (message: string) => {
        setAlertMessage(message);
        setTimeout(() => setAlertMessage(null), 3000); // Auto-hide after 3 seconds
    };

    return (
        <AlertContext.Provider value={{showAlert}}>
            {children}
            {alertMessage && <Alert message={alertMessage} onClose={() => setAlertMessage(null)}/>}
        </AlertContext.Provider>
    );
};

// Alert Component
const Alert: React.FC<{ message: string; onClose: () => void }> = ({message, onClose}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4 animate-fadeIn">
                <i className="fas fa-exclamation-triangle text-yellow-500 text-2xl"></i>
                <span className="text-gray-800 font-semibold">{message}</span>
                <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                    ✖
                </button>
            </div>
        </div>
    );
};
