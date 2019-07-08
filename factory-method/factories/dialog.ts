import { IButton } from './../interfaces/button.interface';
export abstract class Dialog {
  render() {
    const okButton: IButton = this.createButton();
    okButton.onClick(this.closeDialog);
    okButton.render();
  }

  private closeDialog() {
    console.log('close dialog here');
  }
  
  abstract createButton(): IButton;
}