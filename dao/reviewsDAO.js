let reviews;

export default class ReviewsDAO {
  static async injectDB(conn) {
    if (reviews) {
      return;
    }
    try {
      reviews = await conn.db("MovieApp").collection("reviews");
    } catch (e) {
      console.error(
        `Unable to establish collection handles in ReviewsDAO: ${e}`
      );
    }
  }

  static async addReview(movieId, review, user) {
    try {
      const reviewDoc = {
        movieId: movieId,
        review: review,
        user: user,
        date: new Date(),
      };
      return await reviews.insertOne(reviewDoc);
    } catch (e) {
      console.error(`Unable to post review: ${e}`);
      return { error: e };
    }
  }

  static async getReviewsByMovieId(movieId) {
    try {
      return await reviews.find({ movieId: movieId }).toArray();
    } catch (e) {
      console.error(`Unable to get reviews: ${e}`);
      return { error: e };
    }
  }
}
