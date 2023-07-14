import UserItem from './UserItem';

const Users = ({ users }) => {
  //   users.map((user) => {
  //     console.log(user);
  //   }); //Got Users to Prop Drill & Map

  return users.map((user) => <UserItem user={user} key={user.id} />);
};

export default Users;
