$(document).ready(function () {

    document.getElementById('import').onclick = function() {
        var files = document.getElementById('selectFiles').files;
        console.log(files[0].name);
        if (files.length <= 0) {
            return false;
        }

        var fr = new FileReader();

        var filename = files[0].name;
        var filetype = filename.split(".").pop().toLowerCase(); 

        console.log(filetype);
        


        fr.onload = function(e) { 
          console.log(e) ;
          var resultF = "";
            if(filetype === "csv"){
              var result = $.csv.toObjects(e.target.result);

              resultF += "<div class=\"col-md-12\" id=\"search-results\"><ul class=\"no-bullet\">";
              for(i=0; i < result.length; i++){
                resultF += "<li><a href=\"" + result[i].url + "\">";
                resultF += result[i].title;
                resultF += "</a><p>" + result[i].description + "</p></li>";
            }

            }else if(filetype === "json"){

                 var result = JSON.parse(e.target.result);
                 console.log(result.Result[0].url);
                 var formatted = JSON.stringify(result, null, 2);
                 console.log(result.Result[1].url);
                 var resultF = "";

                 resultF += "<div class=\"col-md-12\" id=\"search-results\"><ul class=\"no-bullet\">";
                 for(i=0; i < result.Result.length; i++){
                    resultF += "<li><a href=\"" + result.Result[i].url + "\">";
                    resultF += result.Result[i].title;
                    resultF += "</a><p>" + result.Result[i].description + "</p></li>";
                }

            }else if(filetype === "xml"){
               var parser = new DOMParser();
               xmlDoc = parser.parseFromString(e.target.result, "text/xml")


               resultF += "<div class=\"col-md-12\" id=\"search-results\"><ul class=\"no-bullet\">";

               var len = xmlDoc.getElementsByTagName("title");
               for(i=0; i < len.length; i++){
                resultF += "<li><a href=\"" + xmlDoc.getElementsByTagName("url")[i].childNodes[0].nodeValue + "\">";
                resultF += xmlDoc.getElementsByTagName("title")[i].childNodes[0].nodeValue;
                resultF += "</a><p>" + xmlDoc.getElementsByTagName("description")[i].childNodes[0].nodeValue + "</p></li>";
            }

            }else{
                console.log("file not supported!");
            }


            document.getElementById('result').innerHTML = resultF;
            }
  
      fr.readAsText(files.item(0));
  };

});