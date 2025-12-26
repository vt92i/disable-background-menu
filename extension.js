import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";
import * as BackgroundMenu from "resource:///org/gnome/shell/ui/backgroundMenu.js";

export default class DisableBackgroundMenu extends Extension {
  constructor(metadata) {
    super(metadata);
    this._originals = {};
  }

  enable() {
    const prototype = BackgroundMenu.BackgroundMenu.prototype;

    if (!this._originals.backgroundMenuOpen)
      this._originals.backgroundMenuOpen = prototype.open;

    prototype.open = () => {};
  }

  disable() {
    if (!this._originals.backgroundMenuOpen) return;

    BackgroundMenu.BackgroundMenu.prototype.open =
      this._originals.backgroundMenuOpen;

    delete this._originals.backgroundMenuOpen;
  }
}
