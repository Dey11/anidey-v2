import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function descriptionFormatter(desc: string) {
  const formattedDescription = desc
    .replaceAll(`<i>`, "")
    .replaceAll(`</i>`, "")
    .replaceAll(`</br>`, "")
    .replaceAll(`<br>`, "")
    .replaceAll(`(Source)`, "")
    .replaceAll(`(Source: `, "")
    .replaceAll("\n", "")
    .replaceAll("USA", "")
    .replaceAll("Notes", "")
    .replaceAll(")", "")
    .replaceAll(":", "")
    .replaceAll("Aniplex", "")
    .replaceAll("Crunchyroll", "");
  return formattedDescription;
}
