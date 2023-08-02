import UserItem from './UserItem';

const Users = ({ users }) => {
  console.log(users);

  return users.map((user) => <UserItem user={user} key={user.id} />);
};

export default Users;
