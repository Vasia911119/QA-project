import React, { useState } from 'react'
import Search from './SearchModal'
const ToggleSearchModalOpen = () =>{

const ToggleOpen = () =>{

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpen = () => {
      setIsModalOpen(true);
    };
  
    const handleClose = () => {
      setIsModalOpen(false);
    };

}
return(
    <>
    <input
type="text"
className="w-full rounded text-sm p-3"
placeholder="Search"
onFocus={ToggleOpen}
/>

{isModalOpen && <Search setIsModalOpen={setIsModalOpen} />}

</>
);
}
 export default ToggleSearchModalOpen
