import { User } from "./types/User";

let users: User[] = [
  { id: 1, name: "Alex Mota", email: "alexmota@gmail.com", password: "123456" },
  { id: 2, name: "Jorge Nobre", email: "jorgenobre@gmail.com", password: "123456" }
];

export function getUsers() {
  return users;
}

export function getUser(id: number) {
  return users.find(n => n.id === id);
}

export function getUserByEmailAndPassword(password: string) {
  return users.find(n => n.password === password && n.email === password);
}

export function saveUser(user: User) {
  if (user.id) {
    const index = users.findIndex(n => n.id === user.id);
    users[index] = user;
  } else {
    user.id = users.length + 1;
    users.push(user);
  }
}

export function deleteUser(id: number) {
  users = users.filter(n => n.id !== id);
}
