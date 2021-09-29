import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faPlayCircle, faShare } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  const { name, artist, share, images} = props.cart;
  const cartFont = <FontAwesomeIcon icon={faMusic} />;
  const Font1 = <FontAwesomeIcon icon={faShare} />;
  const Font2 = <FontAwesomeIcon icon={faPlayCircle} />;
  
  return (
    <div className="col-lg-4 g-3">
      <div className='card p-2' style={{width: '19rem'}}>
        <div>
            <img className='card-img' src={images} alt="" />
            </div>
        <div className='card-body'>
            <p>{Font2} {name}</p>
            <p>Artist: {artist}</p>
            <p>{Font1} {share}</p>
            <button onClick={()=> props.addToSquad(props.cart)} className="button">
              {cartFont} Add in Playlist
            </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
