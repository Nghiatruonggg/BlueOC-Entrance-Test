import React from "react";
import PostListing from "./pages/PostListing";
import "bootstrap/dist/css/bootstrap.min.css";
import PostForm from "./components/PostForm";

const App = () => {
  return (
    <>
      <h1 className="text-center mt-4">Post Listing</h1>
      <PostListing />
    </>
  );
};

export default App;
