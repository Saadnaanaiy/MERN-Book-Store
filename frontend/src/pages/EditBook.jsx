import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("An error occurred while fetching data", {
          variant: "error",
        });
        console.log(error);
      });
  }, [id, enqueueSnackbar]);

  const handleEditBook = () => {
    const data = { title, author, publishYear };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Edited Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error while editing book", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <BackButton />
      <div className="bg-white shadow-lg rounded-lg p-6 w-[90%] max-w-md mt-3">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Edit Book
        </h1>
        {loading && <Spinner />}
        {!loading && (
          <form className="space-y-6">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-lg font-semibold text-gray-600"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-2 block w-full border rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-sky-400 focus:outline-none"
                placeholder="Enter the book title"
              />
            </div>

            {/* Author */}
            <div>
              <label
                htmlFor="author"
                className="block text-lg font-semibold text-gray-600"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="mt-2 block w-full border rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-sky-400 focus:outline-none"
                placeholder="Enter the author name"
              />
            </div>

            {/* Publish Year */}
            <div>
              <label
                htmlFor="publishYear"
                className="block text-lg font-semibold text-gray-600"
              >
                Publish Year
              </label>
              <input
                type="number"
                id="publishYear"
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
                className="mt-2 block w-full border rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-sky-400 focus:outline-none"
                placeholder="Enter the publish year"
              />
            </div>

            {/* Save Button */}
            <button
              type="button"
              onClick={handleEditBook}
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-lg transition-all"
            >
              Save Changes
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditBook;
