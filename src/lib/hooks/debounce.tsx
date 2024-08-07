import { useState, useEffect } from "react";

export default function useDebounce(
  value: string,
  filters: {
    isTrue: boolean;
    type: string;
    page: number;
    perPage: number;
    season: string;
    year: string;
    genre: string[];
    format: string;
    status: string;
  },
  delay: number,
) {
  const [debouncedValue, setDebouncedValue] = useState({ value, filters });

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue({ value, filters });
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
