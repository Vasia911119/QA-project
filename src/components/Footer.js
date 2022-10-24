import React from 'react'
import SwitchLanguages from './SwitchLanguages'
import ToggleMode from './Toggler'

export default function Footer() {
  return (
    <footer className="flex  w-full h-full justify-between py-4 px-5 border-t h-30 border-stone-400">
      <SwitchLanguages />
      <ToggleMode />
    </footer>
  )
}
