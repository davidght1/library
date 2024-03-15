import { createContext,useContext, useEffect, useState } from "react";
import booksData from '../../dataBooks'

const BooksContext = createContext();

export const BooksProvider = ({children}) =>{
    const [books,setBooks] = useState([]);

    useEffect(()=>{
        setBooks(booksData);
    },[])


    //Borrow book
    const borrowBook = (bookId)=>{
        setBooks((prevBooks)=>
        prevBooks.map((book)=>
        book.id === bookId ? {...book, isBorrowed: true}: book))
    }


    return(
        <BooksContext.Provider value={{books,borrowBook}}>
            {children}
        </BooksContext.Provider>
    )


}

export const useBooksContext = () => {
    const context = useContext(BooksContext);
    if (!context) {
      throw new Error("useBooksContext must be used within a BooksProvider");
    }
    return context;
  };