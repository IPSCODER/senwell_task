import express from "express";
import {  allFolders, createFolder, deleteFolder } from "../controller/folders.js";

const router = express.Router();


router.post("/createFolders",createFolder);
router.post("/allFolders",allFolders);
router.post("/deleteFolder",deleteFolder);


export default router