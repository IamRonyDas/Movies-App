import express from "express";
import ReviewsController from "./reviews.controller.js";

const router = express.Router();

router.post("/", ReviewsController.apiPostReview);
router.get("/:movieId", ReviewsController.apiGetReviews);

export default router;
