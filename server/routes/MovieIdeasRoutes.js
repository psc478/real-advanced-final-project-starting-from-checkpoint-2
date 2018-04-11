import express from "express";
const router = express.Router();
import {list,show,create,update,remove} from "../controllers/MovieIdeasController";


router.get("/movieIdeas", list);
router.get("/movieIdeas/:movieIdeaID", show);
router.post("/movieIdeas", create);
router.put("/movieIdeas/:movieIdeaID", update);
router.delete("/movieIdeas/:movieIdeaID", remove);

export default router;
