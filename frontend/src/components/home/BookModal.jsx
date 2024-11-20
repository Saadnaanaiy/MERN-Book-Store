import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-lg shadow-xl overflow-hidden"
      >
        {/* Close Button */}
        <AiOutlineClose
          className="absolute top-4 right-4 text-red-500 hover:text-red-400 text-2xl cursor-pointer transition-colors"
          onClick={onClose}
        />

        {/* Header */}
        <div className="bg-gray-300 text-gray-600 py-4 px-6 text-lg font-bold flex items-center">
          <h2>Book Details</h2>
          <span className="text-sm font-medium bg-gray-400 mx-8 px-3 py-1 rounded-md">
            {book.publishYear}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Book ID */}
          <p className="text-xs text-gray-400 truncate">ID: {book._id}</p>

          {/* Title */}
          <div className="flex items-center gap-x-2">
            <PiBookOpenTextLight className="text-gray-500 text-xl" />
            <h2 className="text-lg font-semibold text-gray-500">
              {book.title}
            </h2>
          </div>

          {/* Author */}
          <div className="flex items-center gap-x-2">
            <BiUserCircle className="text-gray-500 text-xl" />
            <h2 className="text-md text-gray-600">{book.author}</h2>
          </div>

          {/* Description */}
          <div className="text-gray-700 text-sm leading-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              impedit libero eveniet cum vitae qui expedita necessitatibus
              assumenda laboriosam, facilis iste cumque a pariatur nesciunt
              cupiditate voluptas.
            </p>
            <p className="mt-2">
              Quis atque earum voluptate dolor nisi dolorum est? Deserunt
              placeat cumque quo dicta architecto, dolore vitae voluptate sequi
              repellat!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
