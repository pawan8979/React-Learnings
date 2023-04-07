// const Book = (props) => {
//   const { img, title, author, children } = props;
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//       {children}
//     </article>
//   );
// };

// const Book = (props) => {
//   return (
//     <article className="book">
//       <img src={props.img} alt={props.title} />
//       <h2>{props.title}</h2>
//       <h4>{props.author}</h4>
//       {props.children}
//     </article>
//   );
// };

const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

export default Book;
