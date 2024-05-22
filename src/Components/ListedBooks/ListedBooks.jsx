

const ListedBooks = () => {
    return (
        <div>
            <h1 className="text-center font-bold p-4 bg-gray-100 rounded-md"> books</h1>
            {/* Short by */}
            <div className="w-full  text-center my-4">
            <select className="select select-bordered bg-[#23BE0A] text-white font-bold text-lg ">
                <option disabled selected >Shorts By</option>
                 <option>Price</option>
                 <option>Greedo</option>
                </select>
            </div>

            {/* tab index */}
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden border-b-2 flex-nowrap dark:bg-gray-800 dark:text-gray-100">
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-400 dark:text-gray-400">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Read Books</span>
	</a>
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-400 dark:text-gray-50">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Wishlist Books</span>
	</a>
	
</div>
{/* selected cards */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-2 my-6 md:w-5/6 mx-auto md:h-72 border-2 md:p-4 p-2">
    <div className="bg-gray-100 col-span-1 rounded-lg  ">
        <img src="https://m.media-amazon.com/images/I/91tKe3hv8yL._SL1500_.jpg" alt="" className="md:w-[80%] h-full p-4  mx-auto" />
    </div>
    {/* selected cards */}
    
    <div className=" md:px-6 md:py-2 px-2 mx-auto space-y-2 col-span-3 w-full h-full">
	<article className=" dark:bg-gray-100 dark:text-gray-900">
		<div className="space-y-4">
			<h1 className="text-2xl font-bold md:tracking-tight md:text-2xl">Suspendisse ut magna et ipsum sodales accumsan.</h1>
            <p>By: Author name</p>
            <div className="flex justify-between">
                <div className="flex gap-2">
                <h1>Tag: </h1>
                <h1>Tag: </h1>
                <h1>Tag: </h1>
                </div>
                <div className="flex gap-2">
                    <h1>Location</h1>
                    <h1>Years of publishing</h1>
                </div>
            </div>
            <div className="flex justify-between">
                
                <div className="flex gap-2">
                    <h1>PUblisher</h1>
                    <h1>Page: 192</h1>
                </div>
            </div>
            <div className="divider "></div>
			<div className=" flex items-start  w-full gap-2 md:items-center dark:text-gray-600">
            <button type="button" className="md:px-4 px-2 py-2 font-semibold rounded-full bg-[#5ea1f396] text-[#085fcaf6]">Category: Classic</button>
            <button type="button" className="md:px-4 px-2 py-2 font-semibold rounded-full bg-yellow-100 text-yellow-600">Rating: 4.5</button>
            <button type="button" className="md:px-4 px-2 py-2 font-semibold rounded-full bg-[#23BE0A] text-gray-100">View Details</button>
			</div>
		</div>
		
	</article>
	
    </div>
    
    {/* selected cards */}
</div>
        </div>
    );
};

export default ListedBooks;