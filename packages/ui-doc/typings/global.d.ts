declare module '*.less' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module '*.svg' {
  export default any
}
