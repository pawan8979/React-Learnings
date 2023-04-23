// using spread operator
//using () and pssing id inside it will give bug because as soon as code runs it gets invoked automatically so we need to use
//setup wrapper
//option1
// const Book = ({ img, title, author, getBook, id }) => {
//   const getSingleBook = () => {
//     getBook(id);
//   };
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <button onClick={getSingleBook}>click me</button>
//       <h4>{author}</h4>
//     </article>
//   );
// };

//option2->similar, just used directly without creating any addiitonal wrapper function
const Book = ({ img, title, author, getBook, id }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button
        onClick={() => {
          getBook(id);
        }}
      >
        click me
      </button>
      <h4>{author}</h4>
    </article>
  );
};

//below issue code
// const Book = ({ img, title, author, getBook, id }) => {
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <button onClick={getBook(id)}>click me</button>
//       <h4>{author}</h4>
//     </article>
//   );
// };

export default Book;