import FillRenderer from '../component/renderers/FillRenderer'
import { Seg } from '../component/DateComponent'


export default class TimeGridFillRenderer extends FillRenderer {

  attachSegEls(type, segs: Seg[]) {
    let timeGrid = this.component
    let containerEls

    // TODO: more efficient lookup
    if (type === 'bgEvent') {
      containerEls = timeGrid.bgContainerEls
    } else if (type === 'businessHours') {
      containerEls = timeGrid.businessContainerEls
    } else if (type === 'highlight') {
      containerEls = timeGrid.highlightContainerEls
    }

    timeGrid.updateSegVerticals(segs)
    timeGrid.attachSegsByCol(timeGrid.groupSegsByCol(segs), containerEls)

    return segs.map(function(seg) {
      return seg.el
    })
  }

}
