// global.d.ts
declare module "*.css"{
  const content: { [className: string]: string };
  export default content;
};
declare module "*.scss";
declare module "*.sass";
declare module "*.less";
declare module "swiper/css";
declare module "swiper/css/pagination";

export {};
