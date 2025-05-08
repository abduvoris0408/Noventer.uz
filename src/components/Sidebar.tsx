// 'use client'

// import { AnimatePresence, motion } from 'framer-motion'
// import { Briefcase, ChevronRight, Home, Phone, Settings, X } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useEffect, useState } from 'react'
// import { LanguageSwitcher } from './Language-selector'

// interface SidebarProps {
// 	isOpen: boolean
// 	onClose: () => void
// }

// const menuItems = [
// 	{ nameKey: 'home', icon: Home, href: '/' },
// 	{ nameKey: 'portfolio', icon: Briefcase, href: '/portfolio' },
// 	{ nameKey: 'services', icon: Settings, href: '/service' },
// 	{ nameKey: 'contact', icon: Phone, href: '#footer' },
// ]

// const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
// 	const [activeItem, setActiveItem] = useState(0)

// 	useEffect(() => {
// 		const handleEscKey = (e: KeyboardEvent) => {
// 			if (e.key === 'Escape' && isOpen) {
// 				onClose()
// 			}
// 		}

// 		window.addEventListener('keydown', handleEscKey)

// 		if (isOpen) {
// 			document.body.style.overflow = 'hidden'
// 		} else {
// 			document.body.style.overflow = 'auto'
// 		}

// 		return () => {
// 			window.removeEventListener('keydown', handleEscKey)
// 			document.body.style.overflow = 'auto'
// 		}
// 	}, [isOpen, onClose])

// 	return (
// 		<>
// 			<AnimatePresence>
// 				{isOpen && (
// 					<motion.div
// 						initial={{ opacity: 0 }}
// 						animate={{ opacity: 0.5 }}
// 						exit={{ opacity: 0 }}
// 						transition={{ duration: 0.3 }}
// 						className='fixed inset-0 z-20 bg-black'
// 						onClick={onClose}
// 						aria-hidden='true'
// 					/>
// 				)}
// 			</AnimatePresence>

// 			<motion.div
// 				className='fixed inset-y-0 left-0 z-30 w-80 border-r border-gray-300/20 bg-gradient-to-b from-[#0E041D] to-[#1A0B2E] shadow-2xl'
// 				initial={{ x: '-100%' }}
// 				animate={{ x: isOpen ? 0 : '-100%' }}
// 				transition={{
// 					type: 'spring',
// 					stiffness: 300,
// 					damping: 30,
// 				}}
// 			>
// 				<div className='relative h-full flex flex-col p-5'>
// 					<div className='flex justify-between items-center pb-6 border-b border-gray-700/30'>
// 						<Link href='/' className='flex items-center gap-1'>
// 							<Image
// 								src='/logo.svg'
// 								width={150}
// 								height={100}
// 								alt='logo'
// 							/>
// 						</Link>
// 						<motion.button
// 							whileHover={{ rotate: 90 }}
// 							transition={{ duration: 0.2 }}
// 							onClick={onClose}
// 							className='flex items-center justify-center w-8 h-8 rounded-full bg-gray-800/50 text-gray-400 hover:bg-purple-900/30 hover:text-white'
// 							aria-label='yopish'
// 						>
// 							<X size={18} />
// 						</motion.button>
// 					</div>

// 					<nav className='mt-8 flex-grow'>
// 						<ul className='space-y-1'>
// 							{menuItems.map((item, idx) => (
// 								<motion.li
// 									key={idx}
// 									initial={{ x: -20, opacity: 0 }}
// 									animate={{ x: 0, opacity: 1 }}
// 									transition={{
// 										delay: idx * 0.1,
// 										duration: 0.3,
// 									}}
// 								>
// 									<Link
// 										href={item.href}
// 										className={`flex items-center justify-between group px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
// 											activeItem === idx
// 												? 'bg-purple-900/20 text-purple-300'
// 												: 'text-gray-300 hover:bg-gray-800/40 hover:text-white'
// 										}`}
// 										onClick={() => {
// 											setActiveItem(idx)
// 											if (window.innerWidth < 768) {
// 												onClose()
// 											}
// 										}}
// 									>
// 										<div className='flex items-center gap-3'>
// 											<span
// 												className={`${
// 													activeItem === idx
// 														? 'bg-purple-700/50 text-purple-300'
// 														: 'bg-gray-800/50 text-gray-400 group-hover:bg-gray-700/50 group-hover:text-white'
// 												} w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-200`}
// 											>
// 												<item.icon size={18} />
// 											</span>
// 											{}sjfvnsi{' '}
// 										</div>
// 										<motion.span
// 											animate={{
// 												x: activeItem === idx ? 0 : -5,
// 												opacity:
// 													activeItem === idx ? 1 : 0,
// 											}}
// 											transition={{ duration: 0.2 }}
// 										>
// 											<ChevronRight
// 												size={16}
// 												className='text-purple-400'
// 											/>
// 										</motion.span>
// 									</Link>
// 								</motion.li>
// 							))}
// 						</ul>
// 					</nav>

// 					<LanguageSwitcher />

// 					<div className='mt-auto pt-4 border-t border-gray-700/30'>
// 						<div className='flex justify-center space-x-4'></div>
// 						<p className='text-gray-500 text-xs text-center mt-4'>
// 							© {new Date().getFullYear()} Noventer Team
// 						</p>
// 					</div>
// 				</div>
// 			</motion.div>
// 		</>
// 	)
// }

// export default Sidebar
'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Briefcase, ChevronRight, Home, Phone, Settings, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { LanguageSwitcher } from './Language-selector'

interface SidebarProps {
	isOpen: boolean
	onClose: () => void
}

const menuItems = [
	{ nameKey: 'home', icon: Home, href: '/' },
	{ nameKey: 'portfolio', icon: Briefcase, href: '/portfolio' },
	{ nameKey: 'services', icon: Settings, href: '/service' },
	{ nameKey: 'contact', icon: Phone, href: '#footer' },
]

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
	const [activeItem, setActiveItem] = useState(0)

	useEffect(() => {
		const handleEscKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isOpen) {
				onClose()
			}
		}

		window.addEventListener('keydown', handleEscKey)

		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		return () => {
			window.removeEventListener('keydown', handleEscKey)
			document.body.style.overflow = 'auto'
		}
	}, [isOpen, onClose])

	return (
		<>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.5 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className='fixed inset-0 z-20 bg-black'
						onClick={onClose}
						aria-hidden='true'
					/>
				)}
			</AnimatePresence>

			<motion.div
				className='fixed inset-y-0 left-0 z-30 w-80 border-r border-gray-300/20 bg-gradient-to-b from-[#0E041D] to-[#1A0B2E] shadow-2xl'
				initial={{ x: '-100%' }}
				animate={{ x: isOpen ? 0 : '-100%' }}
				transition={{
					type: 'spring',
					stiffness: 300,
					damping: 30,
				}}
			>
				<div className='relative h-full flex flex-col p-5'>
					<div className='flex justify-between items-center pb-6 border-b border-gray-700/30'>
						<Link href='/' className='flex items-center gap-1'>
							<Image
								src='/logo.svg'
								width={150}
								height={100}
								alt='logo'
							/>
						</Link>
						<motion.button
							whileHover={{ rotate: 90 }}
							transition={{ duration: 0.2 }}
							onClick={onClose}
							className='flex items-center justify-center w-8 h-8 rounded-full bg-gray-800/50 text-gray-400 hover:bg-purple-900/30 hover:text-white'
							aria-label='Close Sidebar'
						>
							<X size={18} />
						</motion.button>
					</div>

					<nav className='mt-8 flex-grow'>
						<ul className='space-y-1'>
							{menuItems.map((item, idx) => (
								<motion.li
									key={idx}
									initial={{ x: -20, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{
										delay: idx * 0.1,
										duration: 0.3,
									}}
								>
									<Link
										href={item.href}
										className={`flex items-center justify-between group px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
											activeItem === idx
												? 'bg-purple-900/20 text-purple-300'
												: 'text-gray-300 hover:bg-gray-800/40 hover:text-white'
										}`}
										onClick={() => {
											setActiveItem(idx)
											// Close the sidebar on mobile
											if (window.innerWidth < 768) {
												onClose()
											}
										}}
										aria-label={item.nameKey}
									>
										<div className='flex items-center gap-3'>
											<span
												className={`${
													activeItem === idx
														? 'bg-purple-700/50 text-purple-300'
														: 'bg-gray-800/50 text-gray-400 group-hover:bg-gray-700/50 group-hover:text-white'
												} w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-200`}
											>
												<item.icon size={18} />
											</span>
											{item.nameKey}
										</div>
										<motion.span
											animate={{
												x: activeItem === idx ? 0 : -5,
												opacity:
													activeItem === idx ? 1 : 0,
											}}
											transition={{ duration: 0.2 }}
										>
											<ChevronRight
												size={16}
												className='text-purple-400'
											/>
										</motion.span>
									</Link>
								</motion.li>
							))}
						</ul>
					</nav>

					<LanguageSwitcher />

					<div className='mt-auto pt-4 border-t border-gray-700/30'>
						<div className='flex justify-center space-x-4'></div>
						<p className='text-gray-500 text-xs text-center mt-4'>
							© {new Date().getFullYear()} Noventer Team
						</p>
					</div>
				</div>
			</motion.div>
		</>
	)
}

export default Sidebar
