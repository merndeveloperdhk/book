import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const BooksCard = ({ book }) => {
  console.log(book);
  const {bookId, image, category, bookName, publisher, rating } = book;
  return (
    <Link to={`/singleBook/${bookId}`}>
      <div className="card  bg-base-100 border">
        <img
          className="w-full h-[300px] object-cover p-4 rounded-md"
          src={image}
          alt={bookName}
        />
        <div className="card-body px-4 py-2">
          <h2 className="card-title">{bookName}</h2>
          <p>By: {publisher}</p>
          <hr className="dotted my-2" />
          <div className="card-actions justify-between">
            <div className="">Fiction</div>
            <div className="flex items-center gap-2">
              {rating} <FaRegStar />
            </div>
          </div>
        </div>
    </div>
      </Link>
  );
};

export default BooksCard;
