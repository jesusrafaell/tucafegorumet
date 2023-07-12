import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types';

const DatePicker = () => {
	const [value, setValue] = useState<DateValueType>({
		startDate: new Date(),
		endDate: new Date(),
	});

	const handleValueChange = (newValue: DateValueType) => {
		console.log('newValue:', newValue);
		setValue(newValue);
	};

	return (
		<Datepicker
			inputClassName='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md'
			useRange={false}
			asSingle={true}
			value={value}
			onChange={handleValueChange}
		/>
	);
};

export default DatePicker;
