import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface SidebarProps {
	isOpen: boolean
	onClose: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
	return (
		<div
			className={`fixed inset-0 z-30 transition-transform transform border-r border-gray-300 bg-white w-80 p-5 shadow-lg ${
				isOpen ? 'translate-x-0' : '-translate-x-full'
			}`}
		>
			<div className='flex justify-between pb-[18px]'>
				<Link href='/' className='flex items-center gap-1'>
					<Image src='logo.svg' width={100} height={100} alt='logo' />
				</Link>
				<button
					onClick={onClose}
					className='text-gray-600 text-xl'
					aria-label='Yopish'
				>
					<X />
				</button>
			</div>
			<ul className='mt-5 space-y-3'>
				{['Bosh sahifa', 'Portfolio', 'Xizmatlar', 'Aloqa'].map(
					(item, idx) => (
						<li
							key={idx}
							className='text-lg cursor-pointer font-[Inter] hover:bg-gray-100 p-2 rounded-md'
						>
							{item}
						</li>
					)
				)}
			</ul>
		</div>
	)
}

export default Sidebar
