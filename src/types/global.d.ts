export {};

declare global {
  interface Window {
    scrollToPortfolioProject?: (projectName: string) => void;
  }
}
