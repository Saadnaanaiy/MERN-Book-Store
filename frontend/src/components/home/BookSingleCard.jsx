import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border border-gray-300 rounded-xl shadow-md p-5 m-4 relative bg-white hover:shadow-xl transition-shadow duration-200 ease-in-out">
      {/* Publish Year Badge */}
      <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-lg shadow-md">
        {book.publishYear}
      </span>

      {/* Book ID */}
      <p className="text-gray-400 text-xs truncate mb-3">ID: {book._id}</p>

      {/* Book Title */}
      <div className="flex items-center gap-x-3 mb-3">
        <PiBookOpenTextLight className="text-red-500 text-2xl" />
        <h2 className="text-lg font-semibold text-gray-800">{book.title}</h2>
      </div>

      {/* Author */}
      <div className="flex items-center gap-x-3 mb-5">
        <BiUserCircle className="text-blue-500 text-2xl" />
        <h3 className="text-gray-600">{book.author}</h3>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-4 space-x-4">
        <BiShow
          className="text-3xl text-blue-500 hover:text-blue-700 cursor-pointer transition-transform transform hover:scale-110"
          onClick={() => setShowModal(true)}
          title="View Details"
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle
            className="text-2xl text-green-500 hover:text-green-700 transition-transform transform hover:scale-110"
            title="More Info"
          />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit
            className="text-2xl text-yellow-500 hover:text-yellow-700 transition-transform transform hover:scale-110"
            title="Edit Book"
          />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete
            className="text-2xl text-red-500 hover:text-red-700 transition-transform transform hover:scale-110"
            title="Delete Book"
          />
        </Link>
      </div>

      {/* Modal */}
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
