var xpath = "//a[@title='YouTube Full Automatic Watchtime Software Autoplay Bot Play Videos and Auto Mute Loop']";
var timeout = 15000; // 15 seconds in milliseconds

// Define a function to perform the XPath search and click operation
function performClick() {
    var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (element) {
        element.click();
    } else {
        console.error("Element not found with XPath: " + xpath);
    }
}

// Set the timeout to call the function after 5 seconds
setTimeout(performClick, timeout);
