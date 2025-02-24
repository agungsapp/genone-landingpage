// Definisikan type untuk images
type ImageType = {
  src: string;
  default: string;
};

const HeroImage: ImageType = require("./hero.png");
const BgGradient: ImageType = require("./bg-gradient.jpg");
const Cloud: ImageType = require("./cloud.png");
const CloudTop: ImageType = require("./cloud-top.png");
const Genone: ImageType = require("./genone.png");
const Honda: ImageType = require("./honda.png");

export {
  HeroImage,
  BgGradient,
  Cloud,
  CloudTop,
  Genone,
  Honda
};