import express from "express";
const router = express.Router();
import {list,create,remove} from "../controllers/OrdersController";


router.get("/orders", list);
//router.get("/orders/:orderID", show);
router.post("/orders", create);
//router.put("/orders/:orderID", update);
router.delete("/orders/:orderID", remove);

export default router;
