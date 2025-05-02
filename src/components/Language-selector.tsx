'use client'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Check, Globe } from 'lucide-react'
import { useEffect, useState } from 'react'

interface LanguageSelectorProps {
	onChange?: (language: string) => void
	defaultLanguage?: string
}

export function LanguageSelector({
	onChange,
	defaultLanguage = 'en',
}: LanguageSelectorProps) {
	const [language, setLanguage] = useState(defaultLanguage)

	useEffect(() => {
		if (onChange) {
			onChange(language)
		}
	}, [language, onChange])

	return (
		<div className='flex items-center space-x-2'>
			<Globe className='h-4 w-4 text-white' />
			<Select value={language} onValueChange={setLanguage}>
				<SelectTrigger className='w-[80px] text-white'>
					<SelectValue placeholder='Select language' />
				</SelectTrigger>
				<SelectContent className='bg-[#0E041D] text-white w-[80px] border-none'>
					<SelectItem value='en'>
						<div className='flex items-center justify-between'>
							<span>Eng</span>
							{language === 'en' && (
								<Check className='ml-2 h-4 w-4' />
							)}
						</div>
					</SelectItem>
					<SelectItem value='uz'>
						<div className='flex items-center justify-between'>
							<span>O`z</span>
							{language === 'uz' && (
								<Check className='ml-2 h-4 w-4' />
							)}
						</div>
					</SelectItem>
				</SelectContent>
			</Select>
		</div>
	)
}
