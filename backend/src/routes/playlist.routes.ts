import { Router } from "express";
import PlaylistController from "../controllers/playlist.controller";

const playlistRoutes = Router()

const playlistController = new PlaylistController()

playlistRoutes.get("/playlists", (req,res)  => playlistController.getAll(req,res))
playlistRoutes.get("/playlists/:id", (req, res) => playlistController.getById(req,res))
playlistRoutes.post("/playlists", (req,res) => playlistController.createPlaylist(req,res))
playlistRoutes.delete("/playlist/:id", (req,res) => playlistController.deletePlaylist(req,res))

export default playlistRoutes