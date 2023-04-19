import { useEffect, useState } from "react";
import axios from "axios";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => console.error(error));
    setIsLoading(false);
  }, []);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>There was an error...</h2>;

  if (user !== null) {
    //destructuring when the user not NULL
    const { avatar_url, name, company, bio } = user;
    return (
      <div>
        <img
          style={{ width: "150px", borderRadius: "25px" }}
          src={avatar_url}
          alt={name}
        />
        <h2>{name}</h2>
        <h4>works at {company}</h4>
        <p>{bio}</p>
      </div>
    );
  }
};
export default MultipleReturnsFetchData;
