

$(function(){
	$("#navbar").load("navbar.html");
});

// document.getElementById("navbar").innerHTML ='<object type="text/html" data="navbar.html" ></object>';


document.getElementById("screen").innerHTML = 
"Screen width is " + screen.width + "</br>" +
"Screen Height: " + screen.height + "</br>" +
"Screen Pixel Depth: " + screen.pixelDepth;


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  document.getElementById("location").innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

function getResults() {
	document.getElementById("search-results").innerHTML =
	"<ul class=\"no-bullet\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"https:\/\/www.djangoproject.com\/\">Django: The Web framework for perfectionists with deadlines<\/a>\r\n\t\t\t\t\t\t\t<p>Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of ...<\/p>\r\n\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"https:\/\/docs.djangoproject.com\/en\/2.1\/\">Django documentation<\/a>\r\n\t\t\t\t\t\t\t<p>Django has a lot of documentation. A high-level overview of how it\'s organized ...<\/p>\r\n\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"https:\/\/www.djangoproject.com\/start\/\">Getting started with Django | Django<\/a>\r\n\t\t\t\t\t\t\t<p>Getting started with Django. Depending how new you are to Django, you can ...<\/p>\r\n\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"https:\/\/tutorial.djangogirls.org\/en\/django\/\">What is Django? \u00B7 Django Girls Tutorial<\/a>\r\n\t\t\t\t\t\t\t<p>Django (\/\u02C8d\u0292\u00E6\u014B\u0261o\u028A\/ jang-goh) is a free and open source web application framework, written in Python. A web framework is a set of components that helps you ...<\/p>\r\n\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"https:\/\/en.wikipedia.org\/wiki\/Django_(web_framework)\">Django (web framework) - Wikipedia<\/a>\r\n\t\t\t\t\t\t\t<p>Django is a Python-based free and open-source web framework, which follows the model-view-template (MVT) architectural pattern. It is maintained by the ...<\/p>\r\n\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"https:\/\/github.com\/django\/django\">GitHub - django\/django: The Web framework for perfectionists with ...<\/a>\r\n\t\t\t\t\t\t\t<p>Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of ...<\/p>\r\n\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"https:\/\/realpython.com\/tutorials\/django\/\">Django Tutorials \u2013 Real Python<\/a>\r\n\t\t\t\t\t\t\t<p>Django is a high-level Python Web framework that encourages rapid development and clean pragmatic design. A Web framework is a set of components that ...<\/p>\r\n\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"https:\/\/developer.mozilla.org\/en-US\/docs\/Learn\/Server-side\/Django\/Introduction\">Django introduction - Learn web development | MDN<\/a>\r\n\t\t\t\t\t\t\t<p>Jan 4, 2019 - Congratulations, you\'ve completed the first step in your Django journey! You should now understand Django\'s main benefits, a little about its ...<\/p>\r\n\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"https:\/\/www.django-cms.org\/\">django CMS - Enterprise Content Management with Django - django ...<\/a>\r\n\t\t\t\t\t\t\t<p>Enterprise Content Management with Django The open-source CMS used by thousands of websites since 2007.<\/p>\r\n\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"https:\/\/www.fullstackpython.com\/django.html\">Django - Full Stack Python<\/a>\r\n\t\t\t\t\t\t\t<p>Learn more about Django, the popular batteries-included Python web framework, on Full Stack Python.<\/p>\r\n\t\t\t\t\t\t<\/li>\r\n\t\t\t\t\t<\/ul>"
}