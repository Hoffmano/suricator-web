import React, { useState } from "react";
import { api } from "../services/API";
import { useDispatch, useSelector } from "react-redux";
import { SongData, SongList } from "../store/Interfaces";
import { useHistory } from "react-router-dom";
import Search from "../components/Search";
import Songs from "../components/Songs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SongsByDifficulty from "../components/SongsByDifficulty";

export default function Landing() {
  return (
    <div id="index">
      <div className="content-wrapper">
        <Navbar />
        <Search />
        <Songs />
        <SongsByDifficulty />
        <Footer />
      </div>
    </div>
  );
}
