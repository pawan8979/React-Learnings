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

// const App = () => {
//   return (
//     <section className="booklist">
//       {books.map((booky) => {
//         const { img, title, author, id } = booky;
//         return (
//           <div key={id} className="book">
//             <Book img={img} title={title} author={author} />
//           </div>
//         );
//       })}
//     </section>
//   );
// };

// const App = () => {
//   return (
//     <section className="booklist">
//       {books.map((booky) => {
//         // const { img, title, author, id } = booky;
//         return (
//           <div key={booky.id} className="book">
//             <Book booky={booky} />
//           </div>
//         );
//       })}
//     </section>
//   );
// };

// using spread operator

const App = () => {
  return (
    <section className="booklist">
      <Event />
      {books.map((booky) => {
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
