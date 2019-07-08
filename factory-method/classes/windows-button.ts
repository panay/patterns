import { IButton } from './../interfaces/button.interface';
export class WindowsButton implements IButton {
  render(): string {
    return `Windows Button is rendered`;
  }
  
  onClick(func: Function): void {
    func();
  }
}