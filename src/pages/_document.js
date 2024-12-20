import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="icon" href="/assets/icon.jpg" type="image/x-icon" />
      <title>Portafolio</title>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
