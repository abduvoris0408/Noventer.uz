// 'use client'

// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from '@/components/ui/select'
// import { Check, Globe } from 'lucide-react'
// import { useEffect, useState } from 'react'

// interface LanguageSelectorProps {
// 	onChange?: (language: string) => void
// 	defaultLanguage?: string
// }

// export function LanguageSelector({
// 	onChange,
// 	defaultLanguage = 'en',
// }: LanguageSelectorProps) {
// 	const [language, setLanguage] = useState(defaultLanguage)

// 	useEffect(() => {
// 		if (onChange) {
// 			onChange(language)
// 		}
// 	}, [language, onChange])

// 	return (
// 		<div className='flex items-center space-x-2'>
// 			<Globe className='h-4 w-4 text-blue-500' />
// 			<Select value={language} onValueChange={setLanguage}>
// 				<SelectTrigger className='w-[75px] text-white font-[Inter]'>
// 					<SelectValue placeholder='Select language' />
// 				</SelectTrigger>
// 				<SelectContent className='bg-[#0E041D] text-white w-[80px] border-none'>
// 					<SelectItem value='en'>
// 						<div className='flex items-center justify-between'>
// 							<span>Eng</span>
// 							{language === 'en' && (
// 								<Check className='ml-2 h-4 w-4' />
// 							)}
// 						</div>
// 					</SelectItem>
// 					<SelectItem value='uz'>
// 						<div className='flex items-center justify-between'>
// 							<span>Uz</span>
// 							{language === 'uz' && (
// 								<Check className='ml-2 h-4 w-4' />
// 							)}
// 						</div>
// 					</SelectItem>
// 				</SelectContent>
// 			</Select>
// 		</div>
// 	)
// }

// 'use client'

// import { Check, ChevronDown } from 'lucide-react'
// import { useState } from 'react'

// import { Button } from '@/components/ui/button'
// import {
// 	DropdownMenu,
// 	DropdownMenuContent,
// 	DropdownMenuItem,
// 	DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'
// import { cn } from '@/lib/utils'
// import Image from 'next/image'

// type Language = {
// 	code: string
// 	name: string
// 	flag: string
// 	nativeName: string
// }

// const languages: Language[] = [
// 	{
// 		code: 'en',
// 		name: 'English',
// 		nativeName: 'English',
// 		flag: '/eng.png',
// 	},
// 	{
// 		code: 'uz',
// 		name: 'Uzbek',
// 		nativeName: "O'zbek",
// 		flag: '/uzb.png',
// 	},
// ]

// export function LanguageSwitcher() {
// 	const [currentLanguage, setCurrentLanguage] = useState<Language>(
// 		languages[0]
// 	)

// 	const handleLanguageChange = (language: Language) => {
// 		setCurrentLanguage(language)
// 		// Here you would typically call a function to change the app's language
// 		// For example: changeLanguage(language.code)
// 	}

// 	return (
// 		<DropdownMenu>
// 			<DropdownMenuTrigger asChild>
// 				<Button
// 					variant='default'
// 					className='flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200/20 bg-white/10'
// 				>
// 					<Image
// 						src={currentLanguage.flag}
// 						alt='til'
// 						width={30}
// 						height={30}
// 						className=''
// 					/>
// 					<span className='font-medium font-[Inter] text-white'>
// 						{currentLanguage.nativeName}
// 					</span>
// 					<ChevronDown className='h-4 w-4 text-gray-500' />
// 				</Button>
// 			</DropdownMenuTrigger>
// 			<DropdownMenuContent
// 				align='end'
// 				className='w-[130px] bg-[#0E041D] '
// 			>
// 				{languages.map(language => (
// 					<DropdownMenuItem
// 						key={language.code}
// 						className={cn(
// 							'flex items-center gap-2  px-3 py-2 cursor-pointer bg-[#0E041D] ',
// 							currentLanguage.code === language.code &&
// 								'bg-[#0E041D] '
// 						)}
// 						onClick={() => handleLanguageChange(language)}
// 					>
// 						<Image
// 							src={language.flag}
// 							alt='til'
// 							width={20}
// 							height={20}
// 							className='text-xl'
// 						/>

// 						<span className='font-medium text-white font-[Inter]'>
// 							{language.nativeName}
// 						</span>
// 						{currentLanguage.code === language.code && (
// 							<Check className='h-4 w-4 ml-auto' />
// 						)}
// 					</DropdownMenuItem>
// 				))}
// 			</DropdownMenuContent>
// 		</DropdownMenu>
// 	)
// }
'use client'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useLanguage } from '@/context/LanguageContext'
import { cn } from '@/lib/utils'
import { Check, ChevronDown } from 'lucide-react'
import Image from 'next/image'

type Language = {
	code: string
	name: string
	flag: string
	nativeName: string
}

const languages: Language[] = [
	{
		code: 'en',
		name: 'English',
		nativeName: 'English',
		flag: '/eng.png',
	},
	{
		code: 'uz',
		name: 'Uzbek',
		nativeName: "O'zbek",
		flag: '/uzb.png',
	},
]

export function LanguageSwitcher() {
	const { language, setLanguage } = useLanguage()

	const currentLanguage = languages.find(lang => lang.code === language)!

	const handleLanguageChange = (lang: Language) => {
		setLanguage(lang.code)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='default'
					className='flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200/20 bg-white/10'
				>
					<Image
						src={currentLanguage.flag}
						alt='til'
						width={30}
						height={30}
					/>
					<span className='font-medium font-[Inter] text-white'>
						{currentLanguage.nativeName}
					</span>
					<ChevronDown className='h-4 w-4 text-gray-500' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end' className='w-[130px] bg-[#0E041D]'>
				{languages.map(lang => (
					<DropdownMenuItem
						key={lang.code}
						className={cn(
							'flex items-center gap-2 px-3 py-2 cursor-pointer',
							language === lang.code && 'bg-white/10'
						)}
						onClick={() => handleLanguageChange(lang)}
					>
						<Image
							src={lang.flag}
							alt='til'
							width={20}
							height={20}
						/>
						<span className='font-medium text-white font-[Inter]'>
							{lang.nativeName}
						</span>
						{language === lang.code && (
							<Check className='h-4 w-4 ml-auto' />
						)}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
