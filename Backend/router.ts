import express from "express";
const router = express.Router();

// Import the controllers
import { createMusicPost, getMusicPosts, getMusicPostByID } from './musicController';
import * as UserController from './userController'

// Define the routes
router.post('/login', UserController.requestToken)

router.post('/music', createMusicPost); // Create a new music post
router.get('/music', getMusicPosts); // Get all music posts
router.get('/music/:id', getMusicPostByID); // Get a single music post

export default router;