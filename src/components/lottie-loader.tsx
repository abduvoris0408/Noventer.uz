import Loader from '@/assets/loadinganimate.json'
import Lottie from 'lottie-react'
const LottieLoader = () => {
	return (
		<div className=' absolute top-0 right-0 left-0 bottom-0 flex  items-center justify-center bg-[#0E041D] z-[9999]'>
			<Lottie animationData={Loader} loop={true} />
		</div>
	)
}

export default LottieLoader
