// is file mein ham get request karenge

import Book from "../model/book.model.js"

export const getBook = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json(error);
    }
};

export const getBookById = async (req, res) => {
    try {
        console.log("Full request params:", req.params);
        console.log("Book ID:", req.params.id);
        const book = await Book.findById(req.params.id);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: "Error fetching book details", error });
    }
};
