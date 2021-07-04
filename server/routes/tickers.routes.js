import { Router } from "express";
const router = new Router();

import TickerController from "../controllers/ticker_controller.js";

router.get("/categories", TickerController.getCategories);
router.get("", TickerController.getFilteredByCategoriesTickers);

export default router;
