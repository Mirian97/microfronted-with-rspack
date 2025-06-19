export const mfConfig = {
  name: "about",
  shared: ["react", "react-dom"],
  exposes: {},
  remotes: {
    home: "home@http://localhost:3000/mf-manifest.json",
  },
};
