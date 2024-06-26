import "@/assets/scss/style.scss";

export const metadata = {
  title: "Next.js 사용",
  description: "Next.js를 이용해 보자!",
  keywords: ["공부","열정","열정","열정","!"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.ico" />
      <body>{children}</body>
    </html>
  );
}
