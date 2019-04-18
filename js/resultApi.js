
function hndlr(response) {
	console.log(response);

	for (var i = 0; i < response.items.length; i++) {
		var item = response.items[i];
		var resultF = "";

		resultF += "<li><a href=\"" + item.link + "\">";
        resultF += item.htmlTitle;
        resultF += "</a><p>" + item.htmlSnippet.replace('<br>','') + "</p></li>";

        // in production code, item.htmlTitle should have the HTML entities escaped.
        document.getElementById("content").innerHTML += resultF;
    }

    //Page Controls
        var totalPages = Math.ceil(response.searchInformation.totalResults / 10);
        console.log(totalPages);
        var currentPage = Math.floor(start / 10 + 1);
        console.log(currentPage);
        var pageControls = "<div class='gsc-results'><div class='gsc-cursor-box gs-bidi-start-align' dir='ltr'><div class='gsc-cursor'>";
        //Page change controls, 10 max.
        for (var x = 1; x <= totalPages && x<=10; x++) {
            pageControls += "&nbsp<span class='gsc-cursor-page";
            if (x === currentPage)
                pageControls += " gsc-cursor-current-page";
            var pageLinkStart = x * 10 - 9;
            pageControls+="'><a href='resultApi.html?start="+pageLinkStart+"&q="+query+"'>"+x+"</a></span>";
        }
        pageControls += "</div></div></div>";
        document.getElementById("pageControls").innerHTML += pageControls;
}

var query = document.URL.substr(document.URL.indexOf("q=") + 2);

var start = document.URL.substr(document.URL.indexOf("start=") + 6, 2);
    if (start === "1&" || document.URL.indexOf("start=") === -1)
        start = 1;

console.log(query);

// Load the script src dynamically to load script with query to call.
// DOM: Create the script element
var jsElem = document.createElement("script");
// set the type attribute
jsElem.type = "application/javascript";
// make the script element load file
jsElem.src = "https://www.googleapis.com/customsearch/v1?key=AIzaSyCPIdcw8ock9lVcHsXz5DcKRZqQN1pKLMk&cx=010677132928212689847:w6dfj5gq4si&start="+start+"&q=" +query +"&callback=hndlr";
// insert the element to the body element in order to load the script
document.body.appendChild(jsElem);