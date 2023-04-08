import Book from "./components/Book";
import "./App.css";
import Event from "./components/Event";
import { Books } from "./components/Books";

// using spread operator

const App = () => {
  return (
    <section className="booklist">
      <Event />
      {Books.map((booky) => {
        return (
          <div key={booky.id} className="book">
            <Book {...booky} />
          </div>
        );
      })}
    </section>
  );
};

export default App;
