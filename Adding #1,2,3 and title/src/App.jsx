import Book from "./components/Book";
import "./App.css";
import Event from "./components/Event";
import { Books } from "./components/Books";

// using spread operator

const App = () => {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        <Event />
        {Books.map((booky, index) => {
          return (
            <div key={booky.id} className="book">
              <Book {...booky} number={index} />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default App;
