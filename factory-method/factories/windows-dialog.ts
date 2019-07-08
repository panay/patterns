import { WindowsButton } from './../classes/windows-button';
import { IButton } from './../interfaces/button.interface';
import { Dialog } from "./dialog";

export class WindowsDialog extends Dialog {
  createButton(): IButton {
    return new WindowsButton();
  }
}