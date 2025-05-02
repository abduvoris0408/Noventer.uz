'use client'

import Image from 'next/image'

const Header = () => {
	return (
		<div className='dark:bg-[#0E041D] bg-[#0E041D] pt-16'>
			<div className='container mx-auto w-10/12  pt-22 relative'>
				<div className='flex flex-col lg:flex-row items-start justify-between'>
					<div className='z-10 max-w-xl my-5'>
						<h1 className='text-4xl lg:text-5xl font-bold text-white mb-6'>
							<span className='block font-[Inter]'>
								Yuqori sifatdagi
							</span>
							<span className='block font-normal font-[Inter] '>
								aniqlikka asoslanib
							</span>
							<span className='block font-[Inter] text-[#5A00DB]'>
								istalgan turdagi
							</span>
							<span className='block font-[Inter]'>
								dasturlarni tayyorlaymiz
							</span>
						</h1>
						<button className='bg-[#5A00DB] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition-colors font-[Inter]'>
							Xizmatlar haqida
						</button>
					</div>

					<div className='mt-2 ml-2  lg:mt-8 relative z-10'>
						<Image
							src='/Header.png'
							alt='Laptop display'
							className='w-full z-10'
							width={1000}
							height={1000}
						/>
					</div>
				</div>

				<div className='w-full grid grid-cols-2 lg:grid-cols-4 gap-4  z-20 absolute bottom-[1px] '>
					{[
						{
							icon: '/card1.svg',
							value: '7+ yillik',
							label: 'Umumiy tajriba',
						},
						{
							icon: '/card1.svg',
							value: '5+',
							label: 'Yirik loyihalar',
						},
						{
							icon: '/card1.svg',
							value: '8+',
							label: 'Xizmat turlari',
						},
						{
							icon: '/card1.svg',
							value: '100%',
							label: 'Xavfsizlik',
						},
					].map((card, index) => (
						<div
							key={index}
							className='backdrop-blur-xs bg-white/10 text-white font-[Inter] text-[16px] font-semibold rounded-xl border border-gray-500 shadow-lg transition cursor-pointer relative overflow-hidden hover:border-gray-300 before:absolute before:inset-0 before:border before:border-gray-400 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 flex items-center  gap-4 px-4 py-5'
						>
							<Image
								src={card.icon || '/placeholder.svg'}
								alt={card.label}
								className='w-12 h-12 lg:w-16 lg:h-16'
								width={100}
								height={100}
							/>
							<div className='text-white'>
								<h2 className='font-bold text-xl lg:text-2xl'>
									{card.value}
								</h2>
								<p className='text-sm lg:text-base'>
									{card.label}
								</p>
							</div>
						</div>
					))}
				</div>

				<div className='w-[400px]  h-[550px] hidden lg:flex bg-main/10 rounded-xl absolute bottom-0 right-45 justify-center items-center border border-blue-400/1 bg-blue-400/10 bg-opacity-10'>
					<Image
						src='/layer.png'
						alt='Layer'
						className='z-2 absolute right-2'
						width={500}
						height={400}
					/>
				</div>

				<div className='w-[377px] h-[220px] hidden lg:flex bg-main/10 rounded-xl absolute bottom-0 left-[322px] justify-end items-center border-blue-400/1 bg-blue-400/10'></div>
			</div>
		</div>
	)
}

export default Header
