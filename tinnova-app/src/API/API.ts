export interface UserData {
  name: string;
  cpf: string;
  phone: string;
  email: string;
}

export const fetchUsersData = async () => {
  const endpoint = `https://private-9d65b3-tinnova.apiary-mock.com/users`;
  var users = await (await fetch(endpoint)).json();

  Object.keys(localStorage).map((key) => {
    let oi = JSON.parse(localStorage.getItem(key) || "{}");
    users = [...users, oi];
  });

  return users;
};
