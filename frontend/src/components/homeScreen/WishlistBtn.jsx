import React, { useState } from "react";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";


const WishlistButton = ({
  initialLiked,
  onToggleLike,
}) => {
  const [liked, setLiked] = useState(initialLiked);

  const handleLikeToggle = () => {
    setLiked(!liked);
    onToggleLike();
  };

  return (
    <IconButton
      style={{
        color: liked ? "#0C0B0B" : "#fbb31d",
        border: `0.08px solid ${liked ? "#0C0B0B" : "#fbb31d"}`,
        borderRadius: "10px",
        padding: "5px",
      }}
      aria-label="Add to Wishlist"
      onClick={handleLikeToggle}
    >
      <FavoriteIcon />
    </IconButton>
  );
};

export default WishlistButton;