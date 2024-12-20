import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/styles/globals.css',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        verde_unb: '#A4FED3',
        corBotaoLogin: '#00ABED',
        corFundo: '#EDEDED',
        corModal: "#3EEE9A",
        corTextAreaModal: "#A4FED3",
        corHr: "#2B895C"
      },
      fontFamily: {
        fontAll: ['Questrial', 'sans-serif'],   //pode ser usada em varias partes do codigo.
      },
    },
  },
  plugins: [],
} satisfies Config;
