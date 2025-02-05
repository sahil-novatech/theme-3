import type {Config} from "tailwindcss";
import {nextui} from "@nextui-org/react";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          fontFamily: {
            sans: ["var(--font-sans)"],
            mono: ["var(--font-mono)"],
          },
        },
      },
    darkMode: "class",
    plugins: [
        nextui()
    ],
} satisfies Config;
