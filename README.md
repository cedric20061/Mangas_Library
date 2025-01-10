# Manga Library Project

This project is a web application built to help users learn the basics of SQLite through a manga library. Users can view a list of mangas, their summaries, and other relevant details. The project is developed using HTML and Tailwind CSS for the frontend, and Express.js with SQLite for the backend.

## Features

- Display a list of mangas.
- View summaries and detailed information about each manga.
- Learn how to use SQLite in a practical project setup.

## Project Structure

The project is divided into two main directories:

1. **front-end**: Contains the HTML and Tailwind CSS code.
2. **back-end**: Contains the Express.js application and SQLite database management.

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- SQLite

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/cedric20061/Mangas_Library
   ```

2. Navigate to the project directory:
   ```bash
   cd Mangas_Library
   ```

3. Set up the backend:
   ```bash
   cd back_end
   npm install
   ```

4. Set up the .env:
   Change the file .env.exemple to .env and set the PORT for your application

### Running the Project

1. Start the backend server:
   ```bash
   cd backend
   nodemon
   ```
   The server will run on `http://localhost:5000` by default.

2. Open the frontend:
   - Simply open the HTML files in a browser.

### Example Usage

1. Open the application in your browser.
2. Browse the list of mangas.
3. Fly over a manga to view its summary and details.

## File Structure

```
├── frontend
│   ├── index.html
│   ├── styles.css
│   └── ...
├── backend
│   ├── main.js
│   ├── database
│   └── ...
```

## Future Improvements

- Enable user authentication for personalized experiences.
- Expand the manga details to include ratings and reviews.
- Implement a search and filter feature.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to the creators of Express.js, SQLite, and Tailwind CSS for their amazing tools.
- Inspired by various online manga libraries and tutorials.

