import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <BackButton />
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center mt-3">
        Book Details
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-[90%] max-w-lg mt-3">
        {loading ? (
          <div className="flex justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <div className="space-y-4">
            {/* ID */}
            <div className="flex justify-between border-b pb-2">
              <span className="text-lg font-medium text-gray-600">ID:</span>
              <span className="text-lg text-gray-800">{book._id || "N/A"}</span>
            </div>

            {/* Title */}
            <div className="flex justify-between border-b pb-2">
              <span className="text-lg font-medium text-gray-600">Title:</span>
              <span className="text-lg text-gray-800">
                {book.title || "N/A"}
              </span>
            </div>

            {/* Author */}
            <div className="flex justify-between border-b pb-2">
              <span className="text-lg font-medium text-gray-600">Author:</span>
              <span className="text-lg text-gray-800">
                {book.author || "N/A"}
              </span>
            </div>

            {/* Publish Year */}
            <div className="flex justify-between border-b pb-2">
              <span className="text-lg font-medium text-gray-600">
                Publish Year:
              </span>
              <span className="text-lg text-gray-800">
                {book.publishYear || "N/A"}
              </span>
            </div>

            {/* Created At */}
            <div className="flex justify-between border-b pb-2">
              <span className="text-lg font-medium text-gray-600">
                Created At:
              </span>
              <span className="text-lg text-gray-800">
                {book.createdAt
                  ? new Date(book.createdAt).toLocaleString()
                  : "N/A"}
              </span>
            </div>

            {/* Updated At */}
            <div className="flex justify-between">
              <span className="text-lg font-medium text-gray-600">
                Last Updated:
              </span>
              <span className="text-lg text-gray-800">
                {book.updatedAt
                  ? new Date(book.updatedAt).toLocaleString()
                  : "N/A"}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowBook;
