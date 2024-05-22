import { Link, useLoaderData, useParams } from "react-router-dom";



const SingleBook = () => {
    const singleBook = useLoaderData();
    const {id} = useParams();
    console.log("Current id",id, "SingleBook ", singleBook);
    const findBook = singleBook.find(sBook => sBook.bookId === id);
    console.log(findBook);
   
    
    return (
       <div>
             <div className="hero min-h-[60vh] bg-base-200 rounded-lg">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:w-2/5 h-96 w-full">
          <img src={findBook.image}
                className="  w-full h-full rounded-lg shadow-2xl mx-auto object-cover"
              />
          </div>
          <div className="md:w-3/5 md:p-4">
            <h1 className="text-2xl md:text-4xl font-bold md:leading-[40px] ">
              {findBook.bookName}
            </h1>
            <h1 className="my-2">By: {findBook.author}</h1>

            <h1 className="border border-y-2 border-x-0 my-2 py-2">Fiction</h1>
            <div>
                <h1><span>Review : </span>Description</h1>
                <div className="flex  gap-2 mb-2">
                    <h1>Tag :</h1>
                    {
                        findBook.tags.map((tag, idx) => <h1 className="text-green-600 " key={idx}>{tag}</h1>)
                    }

                </div>
            </div>
            <hr />

            <div className=" my-4">
                <table>
                    <thead>
                    <tr>
                        <th className="text-left pr-5">Number of Pages</th>
                        <td>: {findBook.totalPages}</td>
                    </tr>
                    </thead>
                    
                  <tbody>
                  <tr>
                        <th className="text-left pr-5">Publisher</th>
                        <td>: {findBook.publisher}</td>
                    </tr>
                    <tr>
                        <th className="text-left pr-5">Year of Publishing</th>
                        <td>: {findBook.yearOfPublishing}</td>
                    </tr>
                    <tr>
                        <th className="text-left pr-5">Rating</th>
                        <td>: {findBook.rating}</td>
                    </tr>
                  </tbody>
                </table>
               
                    
                
            </div>

           <div className="flex gap-2">
           <Link to='/listedBooks' className="btn bg-[#23BE0A] hover:bg-[#419134] text-white">
             Read
            </Link>
            <Link to='/listedBooks' className="btn bg-[#50B1C9] hover:bg-[#419134] text-white">
             Wish List
            </Link>
           </div>
          </div>
        </div>
      </div>
       </div>
    );
};

export default SingleBook;