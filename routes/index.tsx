import { Head } from "$fresh/runtime.ts";
import Sidebar from "../components/Sidebar.tsx";
import Titlebar from "../components/Titlebar.tsx";
import Editor from "../components/Editor.tsx";

export default function Home() {
  return (
    <html lang="en">
      <Head>
        <title>Welcome to KBSOO's Page</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            body {
              font-family: 'Fira Code', monospace;
              margin: 0;
              overflow: hidden;
              color: #d4d4d4;
              background-color: #1e1e1e;
            }
            `}
        </style>
      </Head>
      <body>
        <Sidebar />
        <Titlebar />
        <Editor />
      </body>
    </html>
  );
}
