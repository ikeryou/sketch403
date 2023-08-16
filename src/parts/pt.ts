import { MyDisplay } from "../core/myDisplay";
import { Tween } from "../core/tween";
import { Point } from "../libs/point";
import { Util } from "../libs/util";
import { Val } from "../libs/val";

// -----------------------------------------
//
// -----------------------------------------
export class Pt extends MyDisplay {

  private _posStart: Point = new Point()
  private _posEnd: Point = new Point()
  private _rate: Val = new Val(0)

  constructor(opt:any) {
    super(opt)

    this.useGPU(this.el)
    this._reset()
  }

  private _reset():void {
    const w = Util.randomInt(60, 120)
    const h = Util.randomInt(120, 300)

    this._posStart.x = Util.randomInt(0, window.innerWidth)
    this._posStart.y = Util.randomInt(-window.innerHeight, -150)

    this._posEnd.x = this._posStart.x
    this._posEnd.y = Util.randomInt(window.innerHeight, window.innerHeight + 300)

    Tween.instance.set(this.el, {
      width: w,
      height: h,
      x: this._posStart.x,
      y: this._posStart.y,
      // '-webkit-bbackdrop-filter': 'blur(' + Util.randomInt(1, 10) + 'px)',
      'backdrop-filter': 'blur(' + Util.randomInt(1, 10) + 'px)',
    })



    Tween.instance.a(this._rate, {
      val: [0, 1],
    }, Util.random(3, 6), Util.random(0, 1), Tween.Power3EaseInOut, null, null, () => {
      this._reset()
    })
  }

  protected _update():void {
    super._update();

    Tween.instance.set(this.el, {
      y: Util.mix(this._posStart.y, this._posEnd.y, this._rate.val),
      scaleY: Util.mix(1, 1.5, this._rate.val),
      display: this._rate.val > 0.1 ? '' : 'none',
    })
  }
}