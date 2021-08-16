import './Header.css';
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle  } from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react';

function Header() {
  const [cellPhoneMenu, setCellPhoneMenu] = useState(true)

  return (
    <div className= "header">
      <div className="menuIcon">
        <FontAwesomeIcon icon={faEllipsisH} onClick ={()=>setCellPhoneMenu(!cellPhoneMenu)} className= {cellPhoneMenu? "fas fa-ellipsis-h" : "desaparece fas fa-ellipsis-h"} />
      </div>
      <div className={cellPhoneMenu? "desaparece headerPc" : "aparece headerPc"}>
        <Link to="/"><p className="itemHeader">INICIO</p></Link>
        <Link to="/proyectos"><p className="itemHeader">PROYECTOS</p></Link>
        <Link to="/tecnologias"><p className="itemHeader">VIDEOS</p></Link>
        <Link to="/sobre-mi"><p className="itemHeader">BIO</p></Link>
        <Link to="/contacto"><p className="itemHeader">CONTACTO</p></Link>
        <FontAwesomeIcon icon={faTimesCircle} onClick={()=>setCellPhoneMenu(!cellPhoneMenu)} className="fas fa-times-circle itemHeader itemCellphone"/>
      </div>
    </div>
  );
}

export default Header;
