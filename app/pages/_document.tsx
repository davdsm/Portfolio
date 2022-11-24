import { Html, Head, Main, NextScript } from "next/document";
import React, { useState } from "react";

export default function Document() {
  const [Dark, setDark] = useState(false);
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
