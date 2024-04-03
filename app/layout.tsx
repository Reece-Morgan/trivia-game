"use client";
import { Header } from "@component-library";
import styled from "styled-components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Body>
        <Header />
        {children}
      </Body>
    </html>
  );
}

const Body = styled.body`
  margin: 0;
`;
