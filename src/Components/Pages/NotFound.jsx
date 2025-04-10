// src/Components/Pages/NotFound.js
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <img
        src="/alien.png"
        alt="Lost Alien"
        className="w-48 sm:w-60 mb-6 animate-bounce"
      />
      <h1 className="text-5xl sm:text-6xl font-extrabold text-accent mb-3">
        404
      </h1>
      <p className="text-secondary text-lg sm:text-xl max-w-md mb-5">
        Looks like you took a wrong turn in the galaxy. 🛸 This page doesn't
        exist in this universe.
      </p>
      <Link
        to="/"
        className="bg-accent text-white px-5 py-2 rounded-full hover:bg-opacity-90 transition-all"
      >
        Beam me back home
      </Link>
    </div>
  )
}

export default NotFound
