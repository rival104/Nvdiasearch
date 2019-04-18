

$(function(){
	$("#navbar").load("navbar.html");
});

$('.navbar .dropdown > a').click(function() {
 if (!$(this).hasClass("parent-clicked")) {
    $(this).addClass("parent-clicked");
  } else {
    location.href = this.href;
  }
});

document.getElementById("navigatorf").onclick = function() {
	document.getElementById("browserS").hidden = true;
	document.getElementById("navigatorS").hidden = false;
	document.getElementById("windowS").hidden = true;
	document.getElementById("locationS").hidden = true;
	document.getElementById("screenS").hidden = true;
	document.getElementById("geolocationS").hidden = true;

	var navigatorD = "";

	navigatorD += "<p>name: "+navigator.appName + "</p>";
	navigatorD += "<p>product: "+navigator.product + "</p>";
	navigatorD += "<p>version: "+navigator.appVersion + "</p>";
	navigatorD += "<p>useragent: "+navigator.useragent + "</p>";
	navigatorD += "<p>platform: "+navigator.platform + "</p>";
	navigatorD += "<p>language: "+navigator.language + "</p>";

	document.getElementById("navigator").innerHTML = navigatorD;
}

document.getElementById("windowf").onclick = function() {
	document.getElementById("browserS").hidden = true;
	document.getElementById("navigatorS").hidden = true;
	document.getElementById("windowS").hidden = false;
	document.getElementById("locationS").hidden = true;
	document.getElementById("screenS").hidden = true;
	document.getElementById("geolocationS").hidden = true;

	var w = window.innerWidth;
    var h = window.innerHeight;
	document.getElementById("window").innerHTML = 
	"Width: " + w + "<br>Height: " + h;
}

document.getElementById("locationf").onclick = function() {
	document.getElementById("browserS").hidden = true;
	document.getElementById("navigatorS").hidden = true;
	document.getElementById("windowS").hidden = true;
	document.getElementById("locationS").hidden = false;
	document.getElementById("screenS").hidden = true;
	document.getElementById("geolocationS").hidden = true;

	var locationDetail = "";

	locationDetail += "<p>Href: "+location.href + "</p>";
	locationDetail += "<p>Hostname: "+location.hostname + "</p>";
	locationDetail += "<p>Pathname: "+location.pathname + "</p>";
	locationDetail += "<p>Protocol: "+location.protocol + "</p>";

	document.getElementById("location").innerHTML = locationDetail;
}

document.getElementById("screenf").onclick = function() {
	document.getElementById("browserS").hidden = true;
	document.getElementById("navigatorS").hidden = true;
	document.getElementById("windowS").hidden = true;
	document.getElementById("locationS").hidden = true;
	document.getElementById("screenS").hidden = false;
	document.getElementById("geolocationS").hidden = true;

	var screenD = "";

	screenD += "<p>Screen width is " + screen.width + "<br><br>" + "Screen Height: " + screen.height + "<br><br>" + 
			  "Screen Pixel Depth: " + screen.pixelDepth +"</p>";
	screenD += "<p>Available width/height: " + screen.availWidth + "*" + screen.availHeight + "</p>";
	screenD += "<p>Color depth: " + screen.colorDepth + "</p>";
	screenD += "<p>Color resolution: " + screen.pixelDepth + "</p>";

	document.getElementById("screen").innerHTML = screenD;
	
}

document.getElementById("geolocationf").onclick = function() {
	document.getElementById("browserS").hidden = true;
	document.getElementById("navigatorS").hidden = true;
	document.getElementById("windowS").hidden = true;
	document.getElementById("locationS").hidden = true;
	document.getElementById("screenS").hidden = true;
	document.getElementById("geolocationS").hidden = false;

	getLocation();
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    document.getElementById("geolocation").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  document.getElementById("geolocation").innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}


function getResults() {
	document.getElementById("search-results").innerHTML =
	"<ul class=\"no-bullet\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"https:\/\/www.djangoproject.com\/\">Django: The Web framework for perfectionists with deadlines<\/a>\r\n\t\t\t\t\t\t\t<p>Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of ...<\/p>\r\n\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"https:\/\/docs.djangoproject.com\/en\/2.1\/\">Django documentation<\/a>\r\n\t\t\t\t\t\t\t<p>Django has a lot of documentation. A high-level overview of how it\'s organized ...<\/p>\r\n\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"https:\/\/www.djangoproject.com\/start\/\">Getting started with Django | Django<\/a>\r\n\t\t\t\t\t\t\t<p>Getting started with Django. Depending how new you are to Django, you can ...<\/p>\r\n\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"https:\/\/tutorial.djangogirls.org\/en\/django\/\">What is Django? \u00B7 Django Girls Tutorial<\/a>\r\n\t\t\t\t\t\t\t<p>Django (\/\u02C8d\u0292\u00E6\u014B\u0261o\u028A\/ jang-goh) is a free and open source web application framework, written in Python. A web framework is a set of components that helps you ...<\/p>\r\n\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"https:\/\/en.wikipedia.org\/wiki\/Django_(web_framework)\">Django (web framework) - Wikipedia<\/a>\r\n\t\t\t\t\t\t\t<p>Django is a Python-based free and open-source web framework, which follows the model-view-template (MVT) architectural pattern. It is maintained by the ...<\/p>\r\n\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"https:\/\/github.com\/django\/django\">GitHub - django\/django: The Web framework for perfectionists with ...<\/a>\r\n\t\t\t\t\t\t\t<p>Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of ...<\/p>\r\n\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"https:\/\/realpython.com\/tutorials\/django\/\">Django Tutorials \u2013 Real Python<\/a>\r\n\t\t\t\t\t\t\t<p>Django is a high-level Python Web framework that encourages rapid development and clean pragmatic design. A Web framework is a set of components that ...<\/p>\r\n\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"https:\/\/developer.mozilla.org\/en-US\/docs\/Learn\/Server-side\/Django\/Introduction\">Django introduction - Learn web development | MDN<\/a>\r\n\t\t\t\t\t\t\t<p>Jan 4, 2019 - Congratulations, you\'ve completed the first step in your Django journey! You should now understand Django\'s main benefits, a little about its ...<\/p>\r\n\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"https:\/\/www.django-cms.org\/\">django CMS - Enterprise Content Management with Django - django ...<\/a>\r\n\t\t\t\t\t\t\t<p>Enterprise Content Management with Django The open-source CMS used by thousands of websites since 2007.<\/p>\r\n\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"https:\/\/www.fullstackpython.com\/django.html\">Django - Full Stack Python<\/a>\r\n\t\t\t\t\t\t\t<p>Learn more about Django, the popular batteries-included Python web framework, on Full Stack Python.<\/p>\r\n\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t<\/ul>"
}

//about.html navigation
document.getElementById("descriptionf").onclick = function() {
	document.getElementById("browserS").hidden = true;
	document.getElementById("navigatorS").hidden = true;
	document.getElementById("windowS").hidden = true;
	document.getElementById("locationS").hidden = true;
	document.getElementById("screenS").hidden = true;
	document.getElementById("geolocationS").hidden = true;

	document.getElementById("description").hidden = false;
	document.getElementById("contact").hidden = true;
}
document.getElementById("contactf").onclick = function() {
	document.getElementById("browserS").hidden = true;
	document.getElementById("navigatorS").hidden = true;
	document.getElementById("windowS").hidden = true;
	document.getElementById("locationS").hidden = true;
	document.getElementById("screenS").hidden = true;
	document.getElementById("geolocationS").hidden = true;

	document.getElementById("description").hidden = true;
	document.getElementById("contact").hidden = false;
}