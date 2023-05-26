/* eslint-disable */

// Global definitions (you shouldn't import it, it is global scope)

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "normalizr";
declare module "*.scss";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.webp";
declare module "*.gif";

declare module "favicons-webpack-plugin";
