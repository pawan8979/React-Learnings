import avatar from "../../../assets/default-avatar.svg";

const Person = ({ name, id, nickName = "Not Available", images }) => {
  //   const img = images && images[0] && images[0].small && images[0].small.url;

  //optional chaining
  //   const img = images?.[0]?.small?.url || avatar;

  //combining with the nullish coalescing operator ??
  const img = images?.[0]?.small?.url ?? avatar;
  return (
    <div key={id}>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h4>{name}</h4>
      {/* <p>Nickname : {nickName || "Not Available"}</p> */}
      <p>Nickname : {nickName}</p>
    </div>
  );
};
export default Person;
