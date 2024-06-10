declare module "*.module.scss" {
  const content: { readonly [className: string]: string };
  export = content;
}

declare module "*.svg" {
  export = string;
}

declare module "*.png" {
  export = string;
}
