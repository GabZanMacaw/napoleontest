const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
  images: {
    //domains: ["localhost"],
    domains: ["res.cloudinary.com"],
  },
});

// module.exports = {
//   images: {
//     domains: ['res.cloudinary.com'],
//   },
// }