import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  return res.render("index");
});

routes.get("/team", (req, res) => {
  return res.render("team/members");
});

export default routes;
