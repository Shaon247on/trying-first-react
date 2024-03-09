import Book from "./book"
import './book.css'
export default function BookStore({books}){
    return (
        <div>
            <h3>books: {books.length}</h3>
            {books.map(book => <Book book={book}></Book>)}
        </div>
    )
}