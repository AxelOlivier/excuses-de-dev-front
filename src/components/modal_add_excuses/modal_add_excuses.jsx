import { useState } from "react";

import './modal_add_excuses.css'

const ModalAddExcuse = ({ onEcuseSubmit, onClose }) => {

  const [newExcuse, setNewExcuse] = useState("");


  const handleNewExcuseSubmit = () => {
    onEcuseSubmit(newExcuse)
  };

  const newInputValueChange = (ev) => {
    setNewExcuse(ev.target.value)
  }

    return (
      <div className="background">
        <div className="modaladdexcuse_container">
          <button onClick={onClose}>
           X
          </button>
          <h2>Ajoute ton excuse juste ici !</h2>
          <input type="text" value={newExcuse} onChange={newInputValueChange} />
          <button onClick={handleNewExcuseSubmit}> Envoie ton excuse </button>
        </div>
      
        </div>
    );
  };

  export default ModalAddExcuse