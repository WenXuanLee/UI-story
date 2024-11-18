import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));

export const removePXString = (size: string): Number => {
  return Number(size.replace('px', ''))
}