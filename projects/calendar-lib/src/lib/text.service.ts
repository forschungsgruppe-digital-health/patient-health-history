import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor() { }

  private _canvas: HTMLCanvasElement | null = null;

  public getTextWidth(text: string, font: string): number | null {
    let c = this._canvas || document.createElement("canvas");
    this._canvas = c;
    let ctx = this._canvas.getContext("2d");
    if (!ctx) {
      return null;
    }

    ctx.font = font;
    let measurement = ctx.measureText(text);
    return measurement.width;
  }
}
