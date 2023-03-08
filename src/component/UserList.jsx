import UserItem from "./UserItem";

const UserList = ({ list, isLoading, error }) => {
  if (isLoading) {
    return <h1>...loading...</h1>;
  }

  if (error) {
    return <p>error</p>;
  }

  return (
    list && (
      <div className="container">
        {list.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    )
  );
};

export default UserList;
