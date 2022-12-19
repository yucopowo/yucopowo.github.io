
const ZOOM = 1 / 0.2;
export function click(x, y) {
    // const screen = document.getElementById('screen');
    //
    // const {
    //     height: screen_height,
    //     width: screen_width,
    //     x: screen_x,
    //     y: screen_y
    // } = screen.getBoundingClientRect();

    // console.log(screen_x, screen_y, screen_width, screen_height)

    // const offset_x = (screen_x + x);
    // const offset_y = (screen_y + y);

    // console.log('offset', offset_x, offset_y);
    const offset_x = ( x );
    const offset_y = ( y );

    const ev = document.createEvent("MouseEvent");
    const el = document.elementFromPoint(offset_x, offset_y);
    if(!el) return;
    ev.initMouseEvent(
        "click",
        true /* bubble */, true /* cancelable */,
        window, null,
        offset_x, offset_y, 0, 0, /* coordinates */
        false, false, false, false, /* modifier keys */
        0 /*left*/, null
    );
    el.dispatchEvent(ev);
}


export function swipe(x1, y1, x2, y2, duration) {

}
