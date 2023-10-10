import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(input: string | number | Date): string {
	if (!input) return "";
	const date = new Date(input);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
}

export function numberWithCommas(x: string | number) {
	return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatAmount(amountInKobo: number): string {
	const amountInNaira = amountInKobo / 100; // Convert kobo to naira
	return numberWithCommas(amountInNaira.toFixed(2)); // Format to two decimal places
}