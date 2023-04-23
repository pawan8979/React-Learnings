import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
export const Books = [
  {
    title: "Dog Man",
    author: "Dav Pilkey",
    img: img1,
    id: 1,
  },
  {
    title: "How to Catch the Easter Bunny",
    author: "Adam Wallace",
    img: img2,
    id: 2,
  },
  {
    title: "It's Not Easy Being a Bunny",
    author: "Marilyn Sadler",
    img: img3,
    id: 3,
  },
];

/*
1. export const Books
  ->we export only specific Books component/array
  ->we need to use the same name while importing {Books}

  2. export default Books
  -> we can have only one export default per file
  -> we can have any name while importing
*/
