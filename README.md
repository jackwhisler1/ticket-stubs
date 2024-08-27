# Ticket Binder

Ticket Binder is a web application built with React and styled with Tailwind CSS. It utilizes the Setlist.fm API to retrieve a user's concert history and generate a digital ticket stub binder.

## Features

- **Setlist Retrieval**: Fetches concert setlists from Setlist.fm API.
- **Ticket Stub Binder**: Generates a digital ticket stub binder for the user's concert history.
- **Tailwind CSS Styling**: Styled with Tailwind CSS for a clean and responsive design.
- **Client-side Rendering**: Built with React and Vite for fast development and hot module reloading.

## Getting Started

To run this application locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/jackwhisler1/ticket-stubs.git
   ```

2. **Install dependencies**:

   ```bash
   cd ticket-stubs
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env.local` file in the root of the project and add your Setlist.fm API key:

   ```
   SETLIST_API_KEY=your_setlist_fm_api_key
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Open your browser**:

   Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Technologies Used

- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces. It allows for the creation of reusable UI components and efficient updates to the user interface.

- **[Vite](https://vitejs.dev/)**: A modern build tool that provides a fast development server and optimized build process. It offers instant hot module replacement and quick build times.

- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework that provides a set of low-level utility classes for building custom designs without leaving your HTML.

- **[Setlist.fm API](https://api.setlist.fm/docs/1.0/index.html)**: An API for retrieving concert setlists, allowing you to access detailed information about past concerts and setlists from artists.

---
