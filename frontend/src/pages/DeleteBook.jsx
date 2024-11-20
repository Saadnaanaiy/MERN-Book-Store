import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("An Error Occurred", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <BackButton />
      <div className="bg-white shadow-lg rounded-lg p-6 w-[90%] max-w-md text-center mt-3">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Delete Book</h1>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <h3 className="text-xl text-gray-600 mb-6">
              Are you sure you want to delete this book?
            </h3>
            <button
              onClick={handleDeleteBook}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all w-full"
            >
              Yes, Delete it
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default DeleteBook;
