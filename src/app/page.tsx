'use client'
import About from '@/components/About'
import Header from '@/components/Header'
import Projects from '@/components/projects'
import Services from '@/components/Services'
import dynamic from 'next/dynamic'
const LottieLoader = dynamic(() => import('@/components/lottie-loader'), {
	ssr: false,
})

import { useEffect, useState } from 'react'
const Homepage = () => {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 3000)

		return () => clearTimeout(timer)
	}, [])
	return (
		<div>
			{isLoading ? (
				<div className='flex flex-col items-center'>
					<LottieLoader />
				</div>
			) : (
				<>
					<Header />
					<About />
					<Projects />
					<Services />
				</>
			)}
		</div>
	)
}

export default Homepage
