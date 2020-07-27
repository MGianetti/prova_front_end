import React from "react";

import { UserData } from "../API/API";

interface UsersListProps {
  usersData: UserData[];
}

const UsersList: React.FC<UsersListProps> = ({ usersData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>CPF</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        {usersData.map((user, index) => (
          <tr className={index % 2 === 0 ? "even" : "odd"} key={user.cpf}>
            <td title={user.name}>{user.name}</td>
            <td title={user.email}>{user.email}</td>
            <td title={user.cpf}>{user.cpf}</td>
            <td title={user.phone}>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersList;
