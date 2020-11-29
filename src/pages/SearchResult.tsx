import React, { useState } from "react";
import Songs from "../components/Songs";
import Navbar from "../components/Navbar";
import SongsByDifficulty from "../components/SongsByDifficulty";

export default function SearchResults() {
  return (
    <div>
      <Navbar />
      <Songs />
      <SongsByDifficulty/>
    </div>
  );
}
