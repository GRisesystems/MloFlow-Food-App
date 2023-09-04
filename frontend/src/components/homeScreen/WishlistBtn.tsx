import React, { useState } from "react";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface WishlistButtonProps {
  initialLiked: boolean;
  onToggleLike: () => void;
  amount: number;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({
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
        color: liked ? "#fbb31d" : "#0C0B0B",
        border: `0.08px solid ${liked ? "#fbb31d" : "#0C0B0B"}`,
        borderRadius: "10px",
        padding: "5px",
        marginTop: "0px",
      }}
      aria-label="Add to Wishlist"
      onClick={handleLikeToggle}
    >
      <FavoriteIcon />
    </IconButton>
  );
};

export default WishlistButton;