export const mfConfig = {
  name: "home",
  shared: ["react", "react-dom"],
  exposes: {
    "./styles": "./src/index.css",
    "./Header": "./src/components/header.tsx",
    "./Footer": "./src/components/footer.tsx",
  },
};
