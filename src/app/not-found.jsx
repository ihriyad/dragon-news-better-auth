"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-6">
      <div className="text-center max-w-lg">
        {/* Title */}
        <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-700">
          Page not found
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-500 text-sm sm:text-base">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
