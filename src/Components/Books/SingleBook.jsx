import { useLoaderData } from "react-router-dom";



const SingleBook = () => {
    const singleBook = useLoaderData();
    console.log('single book', singleBook);
    
    return (
        <div>
            <h1>Single book </h1>
        </div>
    );
};

export default SingleBook;