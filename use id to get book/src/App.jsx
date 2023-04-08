import Book from "./components/Book";
import "./App.css";
import Event from "./components/Event";

const books = [
  {
    title: "Dog Man",
    author: "Dav Pilkey",
    img: "https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81fyoFoaxlL._AC_UL600_SR600,400_.jpg",
    id: 1,
  },
  {
    title: "How to Catch the Easter Bunny",
    author: "Adam Wallace",
    img: "https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/810bsxh1MmL._AC_UL600_SR600,400_.jpg",
    id: 2,
  },
];

// using spread operator

//finding book using id and displaying it on button click
const App = () => {
  const getBook = (id) => {
    const booky = books.find((booky) => booky.id === id);
    console.log(booky);
  };
  return (
    <section className="booklist">
      <Event />
      {books.map((booky) => {
        return (
          <div key={booky.id} className="book">
            <Book {...booky} getBook={getBook} />
          </div>
        );
      })}
    </section>
  );
};

export default App;