import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthProvider';

function BookReader() {
    const { id } = useParams();  
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [authUser] = useAuth();
    const [loading, setLoading] = useState(true);

    // Check auth and redirect if needed
    useEffect(() => {
        if (!authUser) {
            navigate('/signup', { replace: true });
        }
    }, [authUser, navigate]);

    // Fetch book data
    useEffect(() => {
        if (!authUser || !id) return;

        console.log("Fetching book with ID:", id);
        setLoading(true);
        
        const controller = new AbortController();
        
        const fetchBookDetails = async () => {
            try {
                const res = await axios.get(`http://localhost:4001/book/${id}`, {
                    signal: controller.signal
                });
                console.log("Book data received:", res.data);
                setBook(res.data);
            } catch (error) {
                if (error.name !== 'CanceledError') {
                    console.log("Error loading book:", error);
                }
            } finally {
                setLoading(false);
            }
        };
        
        fetchBookDetails();
        
        return () => controller.abort();
    }, [id, authUser]);

    if (!authUser) return null;
    if (loading) return <div className="h-screen flex items-center justify-center">Loading PDF...</div>;
    if (!book) return <div className="h-screen flex items-center justify-center">No book found</div>;

    return (
        <div className="w-full h-screen flex flex-col bg-slate-900">
            <div className="p-4 bg-base-200 flex justify-between items-center shadow-md dark:bg-slate-800">
                <h1 className="text-xl font-bold dark:text-white">{book.name}</h1>
                <button 
                    onClick={() => navigate(-1)} 
                    className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200"
                >
                    Back to Library
                </button>
            </div>
            
            <div className="flex-grow">
                <iframe
                    src={`${book.pdfUrl}#toolbar=0`} 
                    width="100%"
                    height="100%"
                    title={book.name}
                    className="border-none"
                ></iframe>
            </div>
        </div>
    );
}

export default BookReader;