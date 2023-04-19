import { useState, useEffect } from "react";
import axios from "axios";
const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Using the built-in fetch API:
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((users) => setusers(users))
    //   .catch((error) => console.error(error));

    // Using async/await:
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(url);
    //     const users = await response.json();
    //     setUsers(users);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchData();

    // Using third-party libraries like axios:
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setUsers(response.data); // update the state with the fetched data
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <section>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
