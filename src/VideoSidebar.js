import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

function VideoSidebar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);/* variable para hacer clickable el icono */

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={(e) => setLiked(true)}/* cambia el icono por uno con borde */
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>{/* determina los likes debajo del icono */}
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>{/* determina los mensajes debajo del icono */}
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>{/* determina los mensajes debajo del icono */}
      </div>
    </div>
  );
}

export default VideoSidebar;
