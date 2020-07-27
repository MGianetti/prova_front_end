import React, { useState, useEffect } from "react";

//Components
import UserForm from "./components/UserForm";
import UsersList from "./components/UsersList";

//Api
import { fetchUsersData } from "./API/API";

//Interfaces
import { UserData } from "./API/API";

//Styled Components
import { AppWrapper, GlobalStyles } from "./App.styles";
import Toggler from "./components/Toggler";

function App() {
  const [users, setUsers] = useState<UserData[]>([]);
  const [toggleApp, setToggleApp] = useState(true);

  const initApp = async () => {
    const fetchedUsers = await fetchUsersData();
    setUsers(fetchedUsers);
  };

  const userAddHandler = (newUser: UserData) => {
    setUsers([...users, newUser]);
    localStorage.setItem(newUser.cpf, JSON.stringify(newUser));
  };

  const handleToggleClick = () => {
    setToggleApp((prevState) => !prevState);
  };

  useEffect(() => {
    initApp();
  }, []);

  return (
    <>
      <AppWrapper>
        <GlobalStyles />
        {toggleApp && <UserForm onAddUser={userAddHandler} />}
        {!toggleApp && <UsersList usersData={users} />}
      </AppWrapper>
      <div className="toggler-app">
        <Toggler onToggleClick={handleToggleClick} />
      </div>
    </>
  );
}

export default App;
