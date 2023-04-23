import Book from "./components/Book";
import "./App.css";

const firstBook = {
  title: "Dog Man",
  author: "Dav Pilkey",
  img: "https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81fyoFoaxlL._AC_UL600_SR600,400_.jpg",
};

const secondBook = {
  title: "How to Catch the Easter Bunny",
  author: "Adam Wallace",
  img: "https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/810bsxh1MmL._AC_UL600_SR600,400_.jpg",
};

const App = () => {
  return (
    <div className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          delectus labore numquam minima suscipit ad molestiae atque earum
          debitis deserunt, deleniti aspernatur. Voluptatibus, alias quia.
          Quisquam voluptates vel facilis recusandae.
        </p>
        <button>Buy</button>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </div>
  );
};

export default App;
