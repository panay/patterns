import { IButton } from './../interfaces/button.interface';
import { HtmlButton } from '../classes/html-button';
import { Dialog } from "./dialog";

export class WebDialog extends Dialog {
  createButton(): IButton {
    return new HtmlButton();
  }
}