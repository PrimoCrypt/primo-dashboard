export const formatNumbersInThousands = (number: number) =>{
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formattedId = (number: number) => {
	return String(number).padStart(9, "0");
};

export const formatPhoneNumber = (number: number) =>{
    const formattedNumber = number.toString().replace(/^(\d{3})(\d{3})(\d{3})(\d{4})$/, "+$1 $2 $3 $4");
    return formattedNumber;
}