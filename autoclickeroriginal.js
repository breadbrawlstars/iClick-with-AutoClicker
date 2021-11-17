/**
 * Summary: Upon activation clicks element under mouse.
 * @param {number} [rate] - Timeout between clicks in milliseconds; Default: 500
 * @breadbrawlstars
 * SsBeastbum - Edited code to make the original code function with all number keys
 */
function AutoClick(rate = 500) {
    if (window.attachEvent) {
        document.attachEvent("onmousemove", MouseMv);
    } else {
        document.addEventListener("mousemove", MouseMv, false);
    }
    document.addEventListener('keydown', KeyDown);

    /**
     * Summary: Listens for mouse movment and exports position to variables x & y.
     * @param {Event} e
     */
    function MouseMv(e) {
        if (!e) e = window.event;

        if (typeof e.pageY == 'number') {
            x = e.pageX;
            y = e.pageY;
        } else {
            x = e.clientX;
            y = e.clientY;
        }
    }

    /**
     * Summary: Listens for keydown event
     * @param {Event} e
     */
    function KeyDown(e) {
        if (e.type == 'keydown') {
            var char = e.key
            if (char == '7' || char == '1' || char == '2' || char == '3' || char == '4' || char == '5' || char == '6' || char == '7' || char == '8' || char == '9' || char == '0' ) 
// Summary: Each time it detects the mouse over the big cookie while keys 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 is pressed, it automatically makes the mouse click the cookie, giving you more cookies in your bank. Code works   best with the CpS cheat code for console. - description wrote by @breadbrawlstars

{ 
                setTimeout(Click(x, y), rate);
            }
        }
    }

    /**
     * Summary: Clicks element at postions (x, y) on document.
     * @param {number} x - X coordinate of document element.
     * @param {number} y - Y coordinate of document element.
     */
    function Click(x, y) {
        document.elementFromPoint(x, y).click();
    }
}
setInterval(AutoClick(1), 1) // Listens to the key being pressed each 1 milliseconds;