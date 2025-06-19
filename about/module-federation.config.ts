export const mfConfig = {
  name: "about",
  shared: ["react", "react-dom"],
  exposes: {},
  remotes: {
    home: "home@http://localhost:3001/mf-manifest.json",
  },
};
