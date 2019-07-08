import { IButton } from './interfaces/button.interface';
import { WebDialog } from './factories/web-dialog';
import { WindowsDialog } from './factories/windows-dialog';
import { Dialog } from "./factories/dialog";

class Env {
  static windows(): string {
    return 'windows';
  }
  static web(): string {
    return 'web';
  }
}

class Application {
  private dialog: Dialog = <Dialog>{};
  private button: IButton = <IButton>{};

  constructor(private env: string) {
    this.init();
  }

  private init() {
    if(this.env === 'windows') {
      this.dialog = new WindowsDialog();
    } else if (this.env === 'web') {
      this.dialog = new WebDialog();
    }

    this.button = this.dialog.createButton();

    this.button.onClick(()=> {
      console.log(`Hello ${this.env}`);
    })
    
    console.log(this.button.render());
  }
}

const winApp = new Application(Env.windows());
const webApp = new Application(Env.web());
