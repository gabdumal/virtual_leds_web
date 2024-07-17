const config = {
  semi: true,
  trailingComma: "all",
  importOrder: ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  singleAttributePerLine: false,
  tabWidth: 2,
  useTabs: false,
  tailwindFunctions: ["clsx"],
  tailwindConfig: "tailwind.config.ts",
  plugins: ["prettier-plugin-tailwindcss"],
  experimentalTernaries: true,
};

export default config;
