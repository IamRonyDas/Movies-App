# 🎬 Movies App

A full-stack movies application that fetches real-time movie data from **The Movie Database (TMDb) API** and allows users to **view and write reviews** for their favorite movies.  
Built with **JavaScript (Vanilla JS)** for the frontend and **Node.js + Express + MongoDB** for the backend.

---

## 🚀 Features
- **Popular Movies Listing** – Displays trending movies from TMDb API.
- **Search Functionality** – Search movies by title.
- **Individual Review Pages** – Each movie has its own review page with:
  - Existing reviews displayed with usernames.
  - A form to submit a new review.
- **MongoDB Integration** – All reviews are stored in MongoDB Atlas.
- **Responsive & Modern UI** – Built with clean, responsive design.

---

## 🛠 Tech Stack
**Frontend:**
- HTML, CSS, JavaScript (Vanilla JS)
- TMDb API for movie data

**Backend:**
- Node.js
- Express.js
- MongoDB Atlas (Cloud Database)
- dotenv (for environment variables)
- CORS enabled

---

## 📸 Screenshots

### Movies Listing
![WhatsApp Image 2025-08-08 at 18 49 30_8be3705c](https://github.com/user-attachments/assets/7bca3922-deba-4400-8676-4ad5cf68f036)


### Review Page
![WhatsApp Image 2025-08-08 at 18 49 14_069cde2e](https://github.com/user-attachments/assets/4412293a-ac3c-45c2-aea6-8d03ae2dccf8)


---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/movies-app.git
   cd movies-app

   Install Dependencies- npm install

   Create .env file
   MONGO_URI=your_mongodb_connection_string
    TMDB_API_KEY=your_tmdb_api_key

   Run the Server- npx nodemon server.js

   Open in Browser- http://localhost:3000

📡 API Endpoints
Reviews
POST /api/v1/review – Add a review

GET /api/v1/review/:movieId – Get reviews for a movie

🤝 Contributing
Pull requests are welcome!
If you have ideas for features or UI improvements, feel free to open an issue.
