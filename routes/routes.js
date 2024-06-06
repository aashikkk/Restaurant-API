const express = require("express");
const router = express.Router();

router.post("/restaurants");

router.get("/restaurants/:id");

router.put("/restaurants/:id");

router.delete("/restaurants/:id");

router.get("/restaurants");
