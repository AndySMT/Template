import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 flex justify-center fixed bottom-0 w-full">
      <p>&copy; {new Date().getFullYear()} Andy's Template</p>
    </footer>
  );
}
