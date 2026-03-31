import mongoose  from "mongoose";

const bookSchema = mongoose.Schema( {
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
    pdfURL: String
})

// Schema ka model create kar rahe hain

const Book = mongoose.model("Book", bookSchema);

export default Book;

//bookFile: String