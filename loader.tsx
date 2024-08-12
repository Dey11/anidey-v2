"use client";

export default function myImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: string;
  quality: string;
}) {
  const isLocal = !src.startsWith("http");
  const query = new URLSearchParams();
  console.log("hey im working");
  const imageOptimizationApi =
    "https://transformation-rck84ssos4cks4o40w0s0gcc.anidey.fun/";
  // Your NextJS application URL
  const baseUrl = "https://anidey.fun/";

  const fullSrc = `${baseUrl}${src}`;

  if (width) query.set("width", width);
  if (quality) query.set("quality", quality);

  if (isLocal && process.env.NODE_ENV === "development") {
    return src;
  }
  if (isLocal) {
    return `${imageOptimizationApi}/${fullSrc}?${query.toString()}`;
  }
  return `${imageOptimizationApi}/${src}?${query.toString()}`;
}
