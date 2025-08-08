const BACKEND_API = "http://localhost:3000/api/v1/review";

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");
const movieTitle = decodeURIComponent(urlParams.get("title"));
const moviePoster = urlParams.get("poster");

document.getElementById("movieTitle").textContent = movieTitle;
document.getElementById("moviePoster").src =
  "https://image.tmdb.org/t/p/w300" + moviePoster;

const reviewsList = document.getElementById("reviewsList");

// Load existing reviews
fetch(`${BACKEND_API}/${movieId}`)
  .then((res) => res.json())
  .then((reviews) => {
    if (Array.isArray(reviews) && reviews.length > 0) {
      reviews.forEach((r) => {
        const reviewItem = document.createElement("div");
        reviewItem.className = "review-item";

        // Avatar with first letter of name
        const avatar = document.createElement("div");
        avatar.className = "review-avatar";
        avatar.textContent = (r.user?.[0] || "A").toUpperCase();

        const reviewText = document.createElement("div");
        reviewText.className = "review-text";
        reviewText.innerHTML = `<strong>${r.user}:</strong> ${r.review}`;

        reviewItem.appendChild(avatar);
        reviewItem.appendChild(reviewText);

        reviewsList.appendChild(reviewItem);
      });
    } else {
      reviewsList.innerHTML =
        "<p>No reviews yet. Be the first to write one!</p>";
    }
  })
  .catch((err) => console.error(err));

// Submit new review
document.getElementById("submitReview").onclick = () => {
  const user = document.getElementById("username").value || "Anonymous";
  const review = document.getElementById("reviewText").value.trim();

  if (!review) {
    alert("⚠️ Review cannot be empty!");
    return;
  }

  fetch(BACKEND_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      movieId: movieId.toString(),
      user: user,
      review: review,
    }),
  })
    .then(async (res) => {
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      await res.json();
      alert("✅ Review submitted successfully!");
      location.reload();
    })
    .catch((err) => {
      console.error(err);
      alert("❌ Failed to submit review.");
    });
};
