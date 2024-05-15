const UserNames = ({ userNames, addUser }) => {
  return (
    <div>
      <button onClick={addUser}>Add User</button>
      <div>Users Names: {userNames}</div>
    </div>
  );
};

export default UserNames;
