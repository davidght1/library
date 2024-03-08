import React, {createContext, useContext, useEffect, useState} from "react";
import dataUsers from "../../dataUsers"
const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        setUsers(dataUsers)
    },[])
    // add user
    const addUser = (newUser)=>{
        setUsers((prevUsers)=>[...prevUsers, newUser])
    }
    // user exists
    const isUserIdExists = (userId) => {
        return users.some(user => user.id === userId);
      };
    // delete user by id
    const deleteUserById = (userId) => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      };
      

    return(
        <UserContext.Provider value={{users,addUser,isUserIdExists,deleteUserById}}>
            {children}
        </UserContext.Provider>
    )
};

export const useUserContext = () =>{
    const context = useContext(UserContext)
    if(!context){
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context
}