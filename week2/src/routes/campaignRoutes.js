import express from "express";
import { getCampaigns, createCampaign, getCampaignById } from "../controllers/campaignController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getCampaigns);
router.post("/", protect, createCampaign);
router.get("/:id", getCampaignById);

export default router;
