import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    //do something
    if (name) {
      const newUser = {
        id: new Date().getTime().toString(),
        // id: Date.now(),
        name: name,
      };

      setUsers([...users, newUser]);

      setName("");
    }
    //if no value, do nothing
  };
  const removeItem = (id) => {
    let newUser = users.filter((person) => person.id !== id);
    setUsers(newUser);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            value={name}
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      <div>
        {users.map((person) => {
          const { id, name } = person;
          return (
            <div key={id}>
              <h4>{name}</h4>
              <button onClick={() => removeItem(id)} className="btn">
                remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default UserChallenge;
