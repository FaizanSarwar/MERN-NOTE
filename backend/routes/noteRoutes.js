// import express from "express";
const express = require("express");
const {
  getNotes,
  createNote,
  getNoteById,
  upateNote,
  deleteNote,
} = require("../controller/noteController.js");
const { protects } = require("../middlewares/authMiddleWares");
const router = express.Router();

router.route("/").get(protects,getNotes);
router.route("/create").post(protects, createNote);
router
  .route("/:id")
  .get(protects, getNoteById)
  .put(protects, upateNote)
  .delete(protects, deleteNote);

module.exports = router;
