import React, { useState, useEffect } from 'react'
import { Search } from './SearchModal'
import { RiSearchLine } from 'react-icons/ri'

const ToggleSearchModalOpen = () => {
  let [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    console.log(isOpen)
  }, [isOpen])

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      <button
        className="bg-[#EDEEF9] rounded-[10px] w-[308px] h-10 capitalize flex items-center justify-start gap-[10px] pl-5 cursor-pointer hover:bg-slate-200 focus:bg-slate-200 text-[#9EA2C6] transition-colors"
        type="button"
        onClick={openModal}
      >
        <RiSearchLine color="#9EA2C6" size={24} />
        search
      </button>

      <Search isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}

export default ToggleSearchModalOpen
