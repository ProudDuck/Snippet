function splitTable() {
    var reportDiv = document.getElementById("reportDiv");
    var headTable = document.getElementById("table");

    // copy head table to body table
    var bodyTable = clone(headTable, "bodyTable");

    // create head and body div
    var headDiv = document.createElement("div");
    var bodyDiv = document.createElement("div"); 
    headDiv.id = "headDiv";
    bodyDiv.id = "bodyDiv";

    // append head and body div to reportDiv and remove original table
    reportDiv.appendChild(headDiv);
    reportDiv.appendChild(bodyDiv);
    reportDiv.removeChild(headTable);

    // wrap table by head and body div
    headDiv.appendChild(headTable);
    bodyDiv.appendChild(bodyTable);

    // head table removes content
    var tbody = headTable.getElementsByTagName("tbody");
    headTable.removeChild(tbody[0]);

    // body table removes head
    bodyTable.deleteTHead();

    headDiv.style.overflowX = "hidden";
    headDiv.style.overflowY = "scroll";

    // set body div style
    bodyDiv.style.overflow = "auto";
    bodyDiv.style.width = reportDiv.style.width;
    bodyDiv.style.height = (reportDiv.offsetHeight - headDiv.offsetHeight) + "px";

    bodyDiv.onscroll = function() { 
        headDiv.scrollLeft = bodyDiv.scrollLeft;
    }
}

function clone(tableObj, id) {
    if (null == tableObj || "object" != typeof tableObj) return obj;

    var copy = document.createElement("table");

    for (var attr in tableObj) {
        if (tableObj.getAttribute(attr)) {
            copy.setAttribute(attr, tableObj.getAttribute(attr));
        }
    }
    copy.id = id;
    copy.innerHTML = tableObj.innerHTML;

    return copy;
}
