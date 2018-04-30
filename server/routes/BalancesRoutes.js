import express from "express";
const router = express.Router();
import {list,show,update} from "../controllers/BalancesController";


router.get("/movieIdeas", list);
router.get("/movieIdeas/:balanceID", show);
//router.post("/movieIdeas", create);
router.put("/movieIdeas/:balanceID", update);
//router.delete("/movieIdeas/:movieIdeaID", remove);

export default router;
