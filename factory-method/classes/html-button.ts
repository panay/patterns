import { IButton } from './../interfaces/button.interface';
export class HtmlButton implements IButton {
  render(): string {
    return `Html Button is rendered`;
  }

  onClick(func: Function): void {
    func();
  }
}