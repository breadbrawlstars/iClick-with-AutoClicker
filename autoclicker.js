/**
 * Summary: Upon activation clicks element under mouse.
 * @param {number} [rate] - Timeout between clicks in milliseconds; Default: 1
 * @breadbrawlstars
 * breadbrawlstars - Edited code to make the original code function with all number keys
 */
function AutoClick(rate = 1) {
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

        if (typeof e.pageY == 'letter') {
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
            if (char == 'i') 
// Summary: Each time it detects the mouse over the big cookie while keys `i` is pressed, it automatically makes the mouse click the cookie, giving you more cookies in your bank. Code works   best with the CpS cheat code for console. - description wrote by @SsBeastbum

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