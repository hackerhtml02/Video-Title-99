// Find the element by its XPath
var xpath = "//a[@title='YouTube Automatically Watchtime Software v6.0 Full Automatic Login + Switcher.....']";
var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// Click on the element
if (element) {
    element.click();
} else {
    console.error("Element not found with XPath: " + xpath);
}