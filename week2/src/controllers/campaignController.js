import Campaign from "../models/Campaign.js";

// Get all campaigns
export const getCampaigns = async (req, res) => {
  const campaigns = await Campaign.find();
  res.json(campaigns);
};

// Create a new campaign
export const createCampaign = async (req, res) => {
  const { title, description, goal } = req.body;
  try {
    const campaign = new Campaign({ title, description, goal, creator: req.user.id });
    await campaign.save();
    res.status(201).json(campaign);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get campaign by ID
export const getCampaignById = async (req, res) => {
  const campaign = await Campaign.findById(req.params.id);
  if (!campaign) return res.status(404).json({ message: "Campaign not found" });
  res.json(campaign);
};
