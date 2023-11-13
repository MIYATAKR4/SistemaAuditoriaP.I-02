import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("");

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');
        const userStorage = localStorage.getItem('users_db');

        if (userToken && userStorage) {
            const hasUser = JSON.parse(userStorage)?.filter((user) => user.registration === JSON.parse(userToken).registration);
            if (hasUser) setUser(hasUser[0]);
        }
    }, []);

    const signIn = (registration, password) => {
        const userStorage = JSON.parse(localStorage.getItem('users_db'));
        const hasUser = userStorage?.filter((user) => user.registration === registration);

        if (hasUser?.lenght) {
            if (hasUser[0].registration === registration && hasUser[0].password === password) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem('user_token', JSON.stringify({ registration, token }));
                setUser({ registration, password });
                return;
            } else {
                return "Número de matrícula ou senha incorretos.";
            } 
        } 
        else {
            return "Usuário não encontrado.";
        }
    };

    const signUp = (registration, password) => {
        const userStorage = JSON.parse(localStorage.getItem('users_db'));
        const hasUser = userStorage?.filter((user) => user.registration === registration);

        if (hasUser?.lenght) {
            return "Usuário já cadastrado.";
        }

        let newUser;

        if (userStorage) {
            newUser = [...userStorage, { registration, password }];
        } else {
            newUser = [{ registration, password }];
        }

        localStorage.setItem('users_db', JSON.stringify(newUser));
        return;
    };

    const signOut = () => {
        setUser(null);
        localStorage.removeItem('user_token');
    };

  return (
    <AuthContext.Provider value={{ user, signed: !!user, signIn, signUp, signOut}}>
      {children}
    </AuthContext.Provider>
  );
}
