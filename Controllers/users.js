import { v4 as uuid } from "uuid";

const users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuid() });
  res.send("added user");
};

export const getUser = (req, res) => {
  const singleUser = users.filter((user) => user.id === req.params.id);
  res.send(singleUser);
};

export const deleteUser = (req, res) => {
  users = users.filter((user) => user.id !== req.params.id);
  res.send("users deleted successfully..");
};
export const updateUser = (req, res) => {
  const user = users.find((user) => user.id === req.param.id);
  user.name = req.body.name;
  user.email = req.body.email;
  user.contact = req.body.contact;
  res.send("user updated suceessfully");
};
