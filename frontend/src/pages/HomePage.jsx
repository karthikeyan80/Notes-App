import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import api from "../lib/axios.js";
import { ClipLoader } from "react-spinners";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get("/notes");
        if (res.data && notes > 0) {
          toast.success("Notes Fetched");
        }

        console.log(res.data);
        setNotes(res.data); // ✅ fix here
        setLoading(false); // ✅ stop loading
      } catch (error) {
        console.log(error);
        toast.error("Failed To Load Notes");
        setLoading(false); // ✅ stop loading even on error
      }
    };

    fetchNote();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto p-4">
        {loading ? (
          <div className="text-center py-10">
            <ClipLoader color="#1adc00" />
          </div>
        ) : notes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-16">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        ) : (
          <div className="flex flex-cols items-center justify-center">
            <p className="font-bold font-mono text-2xl text-green-500">
              No Notes Available, create a new one
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
