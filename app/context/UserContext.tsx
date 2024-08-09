"use client";
import React, { createContext } from "react";

interface User {
    id: string;
    email: string;
    full_name: string;
}

interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}


export const UserContext = createContext<UserContextType | null>(null)

export const UserProvider = ({ children }: {children: React.ReactNode}) => {
    const [user, setUser] = React.useState<User | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}