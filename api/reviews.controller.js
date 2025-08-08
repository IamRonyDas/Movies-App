import ReviewsDAO from "../dao/reviewsDAO.js";

export default class ReviewsController {
  static async apiPostReview(req, res) {
    try {
      const movieId = req.body.movieId;
      const review = req.body.review;
      const user = req.body.user;

      const reviewResponse = await ReviewsDAO.addReview(movieId, review, user);
      res.json({ status: "success", review: reviewResponse });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiGetReviews(req, res) {
    try {
      const movieId = req.params.movieId;
      const reviews = await ReviewsDAO.getReviewsByMovieId(movieId);
      res.json(reviews);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
