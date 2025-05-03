import Image from 'next/image'

const ServiceCard = () => {
	return (
		<div className='container w-10/12 mx-auto  py-16 flex flex-col gap-10'>
			<div className='rounded-[16px] border overflow-hidden  border-white/70 bg-white/7 backdrop-blur-xl flex flex-col md:flex-row '>
				<div className='absolute h-50 w-50 bottom-0 left-1/2'>
					<Image fill alt='icon' src='/serviceicon.svg' />
				</div>
				<div className=' text-white p-8 md:p-12 md:w-2/3'>
					<h1 className='text-3xl md:text-4xl font-bold mb-8 font-[Inter]'>
						Landing sahifalar
					</h1>

					<div className='space-y-8'>
						<div className='flex items-start gap-3'>
							<div className='w-6 h-6 mt-1 bg-white rounded-md flex-shrink-0'></div>
							<div>
								<h3 className='text-xl font-semibold mb-2 font-[Inter]'>
									Qisqa va ta&apos;sirli
								</h3>
								<p className='text-gray-300 font-[Inter]'>
									Mijozni birinchi qarashda qiziqtiradigan va
									uni keyingi qadamga undaydigan muhim
									ma&apos;lumotlarni taqdim etadi.
								</p>
							</div>
						</div>

						<div className='flex items-start gap-3'>
							<div className='w-6 h-6 mt-1 bg-white rounded-md flex-shrink-0'></div>
							<div>
								<h3 className='text-xl font-semibold mb-2 font-[Inter]'>
									Maqsadli
								</h3>
								<p className='text-gray-300 font-[Inter]'>
									Aniq maqsadga yo&apos;naltirilgan
									bo&apos;lib, mijozni maxsus harakatga
									undashga xizmat qiladi.
								</p>
							</div>
						</div>

						<div className='flex items-start gap-3'>
							<div className='w-6 h-6 mt-1 bg-white rounded-md flex-shrink-0'></div>
							<div>
								<h3 className='text-xl font-semibold mb-2 font-[Inter]'>
									Tez yuklanuvchi
								</h3>
								<p className='text-gray-300 font-[Inter]'>
									Mijozlarning sabr-toqatiga ta&apos;sir
									qilmaslik uchun iloji boricha tez yuklanadi.
								</p>
							</div>
						</div>
					</div>

					<div className='mt-10 space-y-2'>
						<p className='text-gray-300 font-[Inter]'>
							Texnik vazifa tayyorlab berish: 1 kun
						</p>
						<p className='text-gray-300 font-[Inter]'>
							Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta
							qismdan iborat bo&apos;ladi.)
						</p>
						<p className='text-gray-300 font-[Inter]'>
							Veb Dizayn: 10-15 soatlik mehnat.
						</p>
					</div>

					<button className='hidden md:block px-4 py-4 backdrop-blur-xs bg-white/10 text-white font-[Inter] text-[16px] font-semibold rounded-xl border border-gray-500 shadow-lg transition cursor-pointer relative overflow-hidden hover:border-gray-300 before:absolute before:inset-0 before:border before:border-gray-400 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 mt-8'>
						Buyurtma berish
					</button>
				</div>

				<div className='md:w-1/3 h-auto bg-gray-100 flex items-center justify-center'>
					<div className='relative w-full h-80 md:h-full'>
						<Image
							fill
							src='/servicecardimg.png'
							alt='Financial dashboard preview'
							className='w-full h-full rounded-xl object-cover
							'
						/>
					</div>
				</div>
			</div>
			<div className='rounded-[16px] border overflow-hidden border-white/70 bg-white/7 backdrop-blur-xl flex flex-col md:flex-row'>
				<div className='absolute h-50 w-50 bottom-0 left-1/2'>
					<Image fill alt='icon' src='/serviceicon.svg' />
				</div>

				<div className='text-white p-8 md:p-12 md:w-2/3'>
					<h1 className='text-3xl md:text-4xl font-bold mb-8 font-[Inter]'>
						Katalog sahifalari
					</h1>

					<div className='space-y-8'>
						<div className='flex items-start gap-3'>
							<div className='w-6 h-6 mt-1 bg-white rounded-md flex-shrink-0'></div>
							<div>
								<h3 className='text-xl font-semibold mb-2 font-[Inter]'>
									Mahsulotlar tavsifi
								</h3>
								<p className='text-gray-300 font-[Inter]'>
									Har bir mahsulotning batafsil tavsifi,
									xususiyatlari, afzalliklari va rasmlari
									bilan berilgan.
								</p>
							</div>
						</div>

						<div className='flex items-start gap-3'>
							<div className='w-6 h-6 mt-1 bg-white rounded-md flex-shrink-0'></div>
							<div>
								<h3 className='text-xl font-semibold mb-2 font-[Inter]'>
									Turli filtrlar
								</h3>
								<p className='text-gray-300 font-[Inter]'>
									Mijozlarning qidirishni osonlashtirish uchun
									turli xil filtrlar va saralash imkoniyatlari
									taqdim etiladi.
								</p>
							</div>
						</div>

						<div className='flex items-start gap-3'>
							<div className='w-6 h-6 mt-1 bg-white rounded-md flex-shrink-0'></div>
							<div>
								<h3 className='text-xl font-semibold mb-2 font-[Inter]'>
									Navigatsiya
								</h3>
								<p className='text-gray-300 font-[Inter]'>
									Katalog bo`ylab oson va intuitiv
									harakatlanish uchun qulay navigatsiya tizimi
									yaratilgan.
								</p>
							</div>
						</div>
					</div>

					<div className='mt-10 space-y-2'>
						<p className='text-gray-300 font-[Inter]'>
							Texnik vazifa tayyorlab berish: 1 kun
						</p>
						<p className='text-gray-300 font-[Inter]'>
							Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta
							qismdan iborat bo’ladi.)
						</p>
						<p className='text-gray-300 font-[Inter]'>
							Veb Dizayn: 10-15 soatlik mehnat. Narxi: $100
						</p>
						<p className='text-gray-300 font-[Inter]'>
							Saytni tayyor xolga keltirish muddati: 7-14 kun
						</p>
						<p className='text-gray-300 font-[Inter]'>
							Narxi: $400 - $700
						</p>
					</div>

					<button className='hidden md:block px-4 py-4 backdrop-blur-xs bg-white/10 text-white font-[Inter] text-[16px] font-semibold rounded-xl border border-gray-500 shadow-lg transition cursor-pointer relative overflow-hidden hover:border-gray-300 before:absolute before:inset-0 before:border before:border-gray-400 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 mt-8'>
						Buyurtma berish
					</button>
				</div>

				<div className='md:w-1/3 h-auto bg-gray-100 flex items-center justify-center'>
					<div className='relative w-full h-80 md:h-full'>
						<Image
							fill
							src='/servicecardimg.png'
							alt='Katalog sahifasi'
							className='w-full h-full rounded-xl object-cover'
						/>
					</div>
				</div>
			</div>
			<div className='rounded-[16px] border overflow-hidden border-white/70 bg-white/7 backdrop-blur-xl flex flex-col md:flex-row'>
				<div className='absolute h-50 w-50 bottom-0 left-1/2'>
					<Image fill alt='icon' src='/serviceicon.svg' />
				</div>

				<div className='text-white p-8 md:p-12 md:w-2/3'>
					<h1 className='text-3xl md:text-4xl font-bold mb-8 font-[Inter]'>
						eCommerce Sahifalari
					</h1>

					<div className='space-y-8'>
						<div className='flex items-start gap-3'>
							<div className='w-6 h-6 mt-1 bg-white rounded-md flex-shrink-0'></div>
							<div>
								<h3 className='text-xl font-semibold mb-2 font-[Inter]'>
									Onlayn sotish
								</h3>
								<p className='text-gray-300 font-[Inter]'>
									Mijozlarga tovarlarni to`g`ridan-to`g`ri
									onlayn sotib olish imkoniyatini beradi.
								</p>
							</div>
						</div>

						<div className='flex items-start gap-3'>
							<div className='w-6 h-6 mt-1 bg-white rounded-md flex-shrink-0'></div>
							<div>
								<h3 className='text-xl font-semibold mb-2 font-[Inter]'>
									Xavfsiz to`lov
								</h3>
								<p className='text-gray-300 font-[Inter]'>
									Turli xil xavfsiz to`lov usullarini
									qo`llab-quvvatlaydi.
								</p>
							</div>
						</div>

						<div className='flex items-start gap-3'>
							<div className='w-6 h-6 mt-1 bg-white rounded-md flex-shrink-0'></div>
							<div>
								<h3 className='text-xl font-semibold mb-2 font-[Inter]'>
									Yetkazib berish
								</h3>
								<p className='text-gray-300 font-[Inter]'>
									Mijozlarga buyurtmalarni tez va qulay tarzda
									yetkazib berish xizmatini taqdim etadi.
								</p>
							</div>
						</div>
					</div>

					<div className='mt-10 space-y-2'>
						<p className='text-gray-300 font-[Inter]'>
							Texnik vazifa tayyorlab berish: 3-4 kun
						</p>
						<p className='text-gray-300 font-[Inter]'>
							Sayt sahifalar soni: har bir sahifa minimum 5 ta
							qismdan iborat bo’ladi.
						</p>
						<p className='text-gray-300 font-[Inter]'>
							Veb Dizayn: 7-10 kun mehnat. Narxi: $200-300
						</p>
						<p className='text-gray-300 font-[Inter]'>
							Saytni tayyor xolga keltirish muddati: 40-60 kun
						</p>
						<p className='text-gray-300 font-[Inter]'>
							Narxi: $1000+
						</p>
					</div>

					<button className='hidden md:block px-4 py-4 backdrop-blur-xs bg-white/10 text-white font-[Inter] text-[16px] font-semibold rounded-xl border border-gray-500 shadow-lg transition cursor-pointer relative overflow-hidden hover:border-gray-300 before:absolute before:inset-0 before:border before:border-gray-400 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 mt-8'>
						Buyurtma berish
					</button>
				</div>

				<div className='md:w-1/3 h-auto bg-gray-100 flex items-center justify-center'>
					<div className='relative w-full h-80 md:h-full'>
						<Image
							fill
							src='/servicecardimg.png'
							alt='eCommerce sahifasi'
							className='w-full h-full rounded-xl object-cover'
						/>
					</div>
				</div>
			</div>

			<div className='rounded-[16px] border overflow-hidden border-white/70 bg-white/7 backdrop-blur-xl flex flex-col md:flex-row'>
				<div className='absolute h-50 w-50 bottom-0 left-1/2'>
					<Image fill alt='icon' src='/serviceicon.svg' />
				</div>

				<div className='text-white p-8 md:p-12 md:w-2/3'>
					<h1 className='text-3xl md:text-4xl font-bold mb-8 font-[Inter]'>
						CRM Sahifalari
					</h1>

					<div className='space-y-8'>
						<div className='flex items-start gap-3'>
							<div className='w-6 h-6 mt-1 bg-white rounded-md flex-shrink-0'></div>
							<div>
								<h3 className='text-xl font-semibold mb-2 font-[Inter]'>
									Mijozlar ma`lumotlari
								</h3>
								<p className='text-gray-300 font-[Inter]'>
									Mijozlar haqida muhim ma`lumotlarni to`plash
									va saqlash uchun mo`ljallangan.
								</p>
							</div>
						</div>

						<div className='flex items-start gap-3'>
							<div className='w-6 h-6 mt-1 bg-white rounded-md flex-shrink-0'></div>
							<div>
								<h3 className='text-xl font-semibold mb-2 font-[Inter]'>
									Mijozlar bilan muloqot
								</h3>
								<p className='text-gray-300 font-[Inter]'>
									Mijozlar bilan samarali aloqa o`rnatish va
									ularni qo`llab-quvvatlashga imkon beradi.
								</p>
							</div>
						</div>

						<div className='flex items-start gap-3'>
							<div className='w-6 h-6 mt-1 bg-white rounded-md flex-shrink-0'></div>
							<div>
								<h3 className='text-xl font-semibold mb-2 font-[Inter]'>
									Tahlil
								</h3>
								<p className='text-gray-300 font-[Inter]'>
									Mijozlar haqida to`plangan ma`lumotlarni
									tahlil qilish va qarorlar qabul qilishga
									yordam beradi.
								</p>
							</div>
						</div>
					</div>

					<div className='mt-10 space-y-2'>
						<p className='text-gray-300 font-[Inter]'>
							Texnik vazifa tayyorlab berish: 5-10 kun
						</p>
						<p className='text-gray-300 font-[Inter]'>
							Sayt sahifalar soni: 10 yoki undan yuqori
						</p>
						<p className='text-gray-300 font-[Inter]'>
							Veb Dizayn: 7-10 kun mehnat. Narxi: $300-500
						</p>
						<p className='text-gray-300 font-[Inter]'>
							Saytni tayyor xolga keltirish muddati: 60-80 kun
						</p>
						<p className='text-gray-300 font-[Inter]'>
							Narxi: $3000+
						</p>
					</div>

					<button className='hidden md:block px-4 py-4 backdrop-blur-xs bg-white/10 text-white font-[Inter] text-[16px] font-semibold rounded-xl border border-gray-500 shadow-lg transition cursor-pointer relative overflow-hidden hover:border-gray-300 before:absolute before:inset-0 before:border before:border-gray-400 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 mt-8'>
						Buyurtma berish
					</button>
				</div>

				<div className='md:w-1/3 h-auto bg-gray-100 flex items-center justify-center'>
					<div className='relative w-full h-80 md:h-full'>
						<Image
							fill
							src='/servicecardimg.png'
							alt='CRM sahifasi'
							className='w-full h-full rounded-xl object-cover'
						/>
					</div>
				</div>
			</div>

			<div className='rounded-[16px] border overflow-hidden  border-white/70 bg-white/7 backdrop-blur-xl flex flex-col md:flex-row '>
				<div className='absolute h-50 w-50 bottom-0 left-1/2'>
					<Image fill alt='icon' src='/serviceicon.svg' />
				</div>
				<div className=' text-white p-8 md:p-12 md:w-2/3'>
					<h1 className='text-3xl md:text-4xl font-bold mb-8 font-[Inter]'>
						Landing sahifalar
					</h1>

					<div className='space-y-8'>
						<div className='flex items-start gap-3'>
							<div className='w-6 h-6 mt-1 bg-white rounded-md flex-shrink-0'></div>
							<div>
								<h3 className='text-xl font-semibold mb-2 font-[Inter]'>
									Qisqa va ta&apos;sirli
								</h3>
								<p className='text-gray-300 font-[Inter]'>
									Mijozni birinchi qarashda qiziqtiradigan va
									uni keyingi qadamga undaydigan muhim
									ma&apos;lumotlarni taqdim etadi.
								</p>
							</div>
						</div>

						<div className='flex items-start gap-3'>
							<div className='w-6 h-6 mt-1 bg-white rounded-md flex-shrink-0'></div>
							<div>
								<h3 className='text-xl font-semibold mb-2 font-[Inter]'>
									Maqsadli
								</h3>
								<p className='text-gray-300 font-[Inter]'>
									Aniq maqsadga yo&apos;naltirilgan
									bo&apos;lib, mijozni maxsus harakatga
									undashga xizmat qiladi.
								</p>
							</div>
						</div>

						<div className='flex items-start gap-3'>
							<div className='w-6 h-6 mt-1 bg-white rounded-md flex-shrink-0'></div>
							<div>
								<h3 className='text-xl font-semibold mb-2 font-[Inter]'>
									Tez yuklanuvchi
								</h3>
								<p className='text-gray-300 font-[Inter]'>
									Mijozlarning sabr-toqatiga ta&apos;sir
									qilmaslik uchun iloji boricha tez yuklanadi.
								</p>
							</div>
						</div>
					</div>

					<div className='mt-10 space-y-2'>
						<p className='text-gray-300 font-[Inter]'>
							Texnik vazifa tayyorlab berish: 1 kun
						</p>
						<p className='text-gray-300 font-[Inter]'>
							Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta
							qismdan iborat bo&apos;ladi.)
						</p>
						<p className='text-gray-300 font-[Inter]'>
							Veb Dizayn: 10-15 soatlik mehnat.
						</p>
					</div>

					<button className='hidden md:block px-4 py-4 backdrop-blur-xs bg-white/10 text-white font-[Inter] text-[16px] font-semibold rounded-xl border border-gray-500 shadow-lg transition cursor-pointer relative overflow-hidden hover:border-gray-300 before:absolute before:inset-0 before:border before:border-gray-400 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 mt-8'>
						Buyurtma berish
					</button>
				</div>

				<div className='md:w-1/3 h-auto bg-gray-100 flex items-center justify-center'>
					<div className='relative w-full h-80 md:h-full'>
						<Image
							fill
							src='/servicecardimg.png'
							alt='Financial dashboard preview'
							className='w-full h-full rounded-xl object-cover
							'
						/>
					</div>
				</div>
			</div>
			<div className='rounded-[16px] border overflow-hidden  border-white/70 bg-white/7 backdrop-blur-xl flex flex-col md:flex-row '>
				<div className='absolute h-50 w-50 bottom-0 left-1/2'>
					<Image fill alt='icon' src='/serviceicon.svg' />
				</div>
				<div className=' text-white p-8 md:p-12 md:w-2/3'>
					<h1 className='text-3xl md:text-4xl font-bold mb-8 font-[Inter]'>
						Landing sahifalar
					</h1>

					<div className='space-y-8'>
						<div className='flex items-start gap-3'>
							<div className='w-6 h-6 mt-1 bg-white rounded-md flex-shrink-0'></div>
							<div>
								<h3 className='text-xl font-semibold mb-2 font-[Inter]'>
									Qisqa va ta&apos;sirli
								</h3>
								<p className='text-gray-300 font-[Inter]'>
									Mijozni birinchi qarashda qiziqtiradigan va
									uni keyingi qadamga undaydigan muhim
									ma&apos;lumotlarni taqdim etadi.
								</p>
							</div>
						</div>

						<div className='flex items-start gap-3'>
							<div className='w-6 h-6 mt-1 bg-white rounded-md flex-shrink-0'></div>
							<div>
								<h3 className='text-xl font-semibold mb-2 font-[Inter]'>
									Maqsadli
								</h3>
								<p className='text-gray-300 font-[Inter]'>
									Aniq maqsadga yo&apos;naltirilgan
									bo&apos;lib, mijozni maxsus harakatga
									undashga xizmat qiladi.
								</p>
							</div>
						</div>

						<div className='flex items-start gap-3'>
							<div className='w-6 h-6 mt-1 bg-white rounded-md flex-shrink-0'></div>
							<div>
								<h3 className='text-xl font-semibold mb-2 font-[Inter]'>
									Tez yuklanuvchi
								</h3>
								<p className='text-gray-300 font-[Inter]'>
									Mijozlarning sabr-toqatiga ta&apos;sir
									qilmaslik uchun iloji boricha tez yuklanadi.
								</p>
							</div>
						</div>
					</div>

					<div className='mt-10 space-y-2'>
						<p className='text-gray-300 font-[Inter]'>
							Texnik vazifa tayyorlab berish: 1 kun
						</p>
						<p className='text-gray-300 font-[Inter]'>
							Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta
							qismdan iborat bo&apos;ladi.)
						</p>
						<p className='text-gray-300 font-[Inter]'>
							Veb Dizayn: 10-15 soatlik mehnat.
						</p>
					</div>

					<button className='hidden md:block px-4 py-4 backdrop-blur-xs bg-white/10 text-white font-[Inter] text-[16px] font-semibold rounded-xl border border-gray-500 shadow-lg transition cursor-pointer relative overflow-hidden hover:border-gray-300 before:absolute before:inset-0 before:border before:border-gray-400 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 mt-8'>
						Buyurtma berish
					</button>
				</div>

				<div className='md:w-1/3 h-auto bg-gray-100 flex items-center justify-center'>
					<div className='relative w-full h-80 md:h-full'>
						<Image
							fill
							src='/servicecardimg.png'
							alt='Financial dashboard preview'
							className='w-full h-full rounded-xl object-cover
							'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ServiceCard
