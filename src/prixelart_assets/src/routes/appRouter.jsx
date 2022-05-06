import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import GalleryDetail from "../components/galleryDetail";

import Auth from "../pages/auth";
import Registry from "../pages/auth/registry";
import AddArt from "../pages/main/addArt";
import AddGallery from "../pages/main/addGallery";
import Explore from "../pages/main/explore";
import GalleryDetails from "../pages/main/galleryDetails";
import Main from "../pages/main/index";
import PostDetails from "../pages/main/postDetails";
import Profile from "../pages/main/profile";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/main" element={<Main />} />
        <Route path="/u/:username" element={<Profile />} />
        <Route path="/addArt" element={<AddArt />} />
        <Route path="/addGallery" element={<AddGallery />} />
        <Route path="/post/:postId" element={<PostDetails />} />
        <Route path="/explore" element={<Explore />} />
        <Route
          path="/gallery/:galleryId/posts/:username"
          element={<GalleryDetails />}
        />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </Router>
  );
};
