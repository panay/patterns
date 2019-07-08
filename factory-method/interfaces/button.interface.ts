export interface IButton {
  render(): string;
  onClick(func: Function): void;
}