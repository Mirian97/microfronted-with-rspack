export const mfConfig = {
  name: "home",
  shared: ["react", "react-dom"],
  exposes: {
    "./Header": "./src/components/header.tsx",
    "./Footer": "./src/components/footer.tsx",
  },
};
