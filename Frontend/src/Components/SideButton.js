import React from 'react';
import { Link } from 'react-router-dom';

const SideButton = () => {
  return <div className='sidebutton'>
             <Link to="/AfterSale"> <i class="fas fa-cogs"></i> After Sale Service</Link>
             <Link to="/LandOwner"> <i class="fas fa-landmark"></i> Land Owner</Link>
             <Link to="/contact"> <i class="fas fa-phone-square-alt"></i> Contact</Link>
        </div>;
};

export default SideButton;
