import { Router, urlencoded, json } from "express";
import { production } from "../../../../knexfile.js";

import knex from "knex";

let database = knex({
  client: "sqlite3",
  connection: {
    filename: "./dev.sqlite3",
  },
});

if (process.env.APP == "PROD") {
  database = knex({ ...production });
}

const usersRouter = Router();
usersRouter.use(urlencoded());
usersRouter.use(json());

usersRouter.get("/", function (_, res) {
  database
    .select("*")
    .from("users")
    .then((users) => res.json(users))
    .catch((err) =>
      res.json({ message: `Unable to fetch users: ${err.message}` })
    );
});

usersRouter.get("/:id", (req, res) => {
  database
    .select("*")
    .from("users")
    .where("id", req.params.id)
    .first()
    .then((users) => res.json(users))
    .catch((err) =>
      res.json({ message: `Unable to fetch an user: ${err.message}` })
    );
});

usersRouter.post("/", (req, res) => {
  database("users")
    .insert({
      username: req.body.username,
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      age: req.body.age,
      gender: req.body.gender,
    })
    .then((result) => {
      res.status(201).json();
    })
    .catch((err) => {
      res.status(500).json({
        message: `Unable to create an user ${err.message}`,
      });
    });
});

usersRouter.put("/:id", (req, res) => {
  database("users")
    .where("id", req.params.id)
    .update(
      {
        username: req.body.username,
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        age: req.body.age,
        gender: req.body.gender,
      },
      ["id"]
    )
    .then((result) => {
      res.status(200).json();
    })
    .catch((err) => {
      res.status(500).json({
        message: `Unable to update an user ${err.message}`,
      });
    });
});

usersRouter.delete("/:id", (req, res) => {
  database("users")
    .where({ id: req.params.id })
    .del()
    .then((result) => {
      let user = result[0];
      res.status(200).json(user);
      return;
    })
    .catch((err) => {
      res.status(500).json({
        message: `Unable to delete an user ${err.message}`,
      });
    });
});

export default usersRouter;
