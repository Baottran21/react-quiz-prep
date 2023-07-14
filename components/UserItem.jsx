/* eslint-disable react/prop-types */
const UserItem = ({ user }) => {
  const handleClick = (e) => {
    console.log(e.currentTarget.id);
  };

  return (
    <div className="selected" onClick={handleClick} id={user.id}>
      <h1>{user.name}</h1>
      <h3>{user.username}</h3>
      <h3>{user.email}</h3>
    </div>
  );
};

export default UserItem;
