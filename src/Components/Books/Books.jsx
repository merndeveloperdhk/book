import { useEffect, useState } from "react";
import BooksCard from "./BooksCard";


const Books = () => {
    const[books, setBooks] = useState([]);
    useEffect(() =>{
        fetch('../../../public/bookData.json')
        .then(res => res.json())
        .then(data => {
            setBooks(data)
        })
    },[])
    
    return (
        <div className="my-8">
            <h1 className="text-3xl font-bold text-center mb-4">Books: {books.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {books.map((book, idx) =><BooksCard
                key={idx}
                book={book}
                ></BooksCard>)}
            </div>
            
        </div>
    );
};

export default Books;