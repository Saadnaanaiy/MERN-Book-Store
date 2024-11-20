import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-lg border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
            <th className="px-4 py-3 border-b text-left">No</th>
            <th className="px-4 py-3 border-b text-left">Title</th>
            <th className="px-4 py-3 border-b text-left hidden md:table-cell">
              Author
            </th>
            <th className="px-4 py-3 border-b text-left hidden md:table-cell">
              Publish Year
            </th>
            <th className="px-4 py-3 border-b text-center">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr
              key={book._id}
              className="hover:bg-gray-50 transition-colors text-gray-800"
            >
              <td className="px-4 py-3 border-b text-center">{index + 1}</td>
              <td className="px-4 py-3 border-b">{book.title}</td>
              <td className="px-4 py-3 border-b hidden md:table-cell">
                {book.author}
              </td>
              <td className="px-4 py-3 border-b hidden md:table-cell">
                {book.publishYear}
              </td>
              <td className="px-4 py-3 border-b">
                <div className="flex justify-center items-center gap-4">
                  <Link
                    to={`/books/details/${book._id}`}
                    className="text-green-700 hover:text-green-500 transition"
                  >
                    <BsInfoCircle className="text-xl" />
                  </Link>
                  <Link
                    to={`/books/edit/${book._id}`}
                    className="text-yellow-600 hover:text-yellow-400 transition"
                  >
                    <AiOutlineEdit className="text-xl" />
                  </Link>
                  <Link
                    to={`/books/delete/${book._id}`}
                    className="text-red-600 hover:text-red-400 transition"
                  >
                    <MdOutlineDelete className="text-xl" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
