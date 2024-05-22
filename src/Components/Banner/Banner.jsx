import { useEffect, useState } from "react";

const Banner = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("../../../public/bookData.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);
  return (
    <div>
      <div className="hero min-h-[50vh] bg-base-200 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="md:w-2/5  w-full">
            {books.slice(2, 3).map((img) => (
              <img
                key={img.bookId}
                src={img.image}
                className="md:w-3/5 h-[340px] w-full rounded-lg shadow-2xl mx-auto object-cover"
              />
            ))}
          </div>
          <div className="md:w-3/5 md:p-12">
            <h1 className="text-3xl md:text-5xl font-bold md:leading-[60px] md:mb-8 mb-4">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn bg-[#23BE0A] hover:bg-[#419134] text-white">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
