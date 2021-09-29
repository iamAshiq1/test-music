import React, { useEffect, useState } from "react";
import Squad from "../Added/Squad";
import Cart from "../cart/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';

const Member = () => {
  const [member, setMember] = useState([]);
  const [squad, setSquad] = useState([])

  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setMember(data))
  }, []);
   
  const addToSquad = (add) => {
    const newSquad = [...squad, add]
    setSquad(newSquad);
  }

  return (
    <div className="row mt-5">
        <div className='col-lg-3'>
          <Squad squad={squad} ></Squad>
        </div>
      
        <div className="col-lg-9">
          <div className='row'>
              {member.map((cart) => (
                <Cart cart={cart} key={cart.id} addToSquad={addToSquad}></Cart>
              ))}
          </div>
        </div>
    </div>
      
  );
};

export default Member;
