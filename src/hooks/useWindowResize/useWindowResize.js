import { useState, useEffect } from 'react'

const useWindowResize = () => {
	const [windowWidth, setWindowWidth] = useState(0)

	useEffect(() => {
		function updateWindowWidth() {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', updateWindowWidth)
		updateWindowWidth()
		return () => window.removeEventListener('resize', updateWindowWidth)
	}, [])

	return windowWidth
}

export default useWindowResize
