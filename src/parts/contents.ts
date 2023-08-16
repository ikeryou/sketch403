import { MyDisplay } from "../core/myDisplay";
import { Pt } from "./pt";

// -----------------------------------------
//
// -----------------------------------------
export class Contents extends MyDisplay {

  constructor(opt:any) {
    super(opt)

    const parent = document.querySelector('.l-pt') as HTMLElement
    for(let i = 0; i < 50; i++) {
      const el = document.createElement('div')
      el.classList.add('item')
      parent.append(el)

      new Pt({
        el: el,
      })
    }
  }
}