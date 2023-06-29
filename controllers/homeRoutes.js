const router = require("express").Router();
const { Project, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  const dishData = await Dish.findAll().catch((err) => {
    res.json(err);
  });
  const dishes = dishData.map((dish) => dish.get({ plain: true }));
  res.render("all", { dishes });
});
