function display() {document.getElementById("numberofbeds-contentid").classList.toggle("show");}
function display1() {document.getElementById("startdate-contentid").classList.toggle("show");}
function display2() {document.getElementById("enddate-contentid").classList.toggle("show");}
function display3() {document.getElementById("price-contentid").classList.toggle("show");}
function display4() {document.getElementById("starofhotel-contentid").classList.toggle("show");}



var map = null; 

function mapfunction(){
    //hilton
    var hotel1={lat: -34.930995, lng: 138.569913};
    //pullman
    var hotel2={lat: -34.923247, lng: 138.606309};
    //grand chancellor 
    var hotel3={lat: -34.923723, lng: 138.596847};
    //continental
    var hotel4={lat: -34.921572, lng: 138.610549};
	var mapOption={center:{lat:-34.930995, lng:138.569913},zoom:13};
	map=new google.maps.Map(document.getElementById("map"),mapOption);
    var marker = new google.maps.Marker({
        position: hotel1,
        map: map,
        title: 'Hilton'
     });
    var marker1 = new google.maps.Marker({
        position: hotel2,
        map: map,
        title: 'Pullman'
     });
    var marker2 = new google.maps.Marker({
        position: hotel3,
        map: map,
        title: 'Grand Chancellor'
     });
    var marker3 = new google.maps.Marker({
        position: hotel4,
        map: map,
        title: 'Continental'
     });
    var infowindow = new google.maps.InfoWindow({
        content: '<h3>Hilton</h3><p>-34.93099,138.569913</p><p>price: 180$ Per Night</p><a href="page1.html">more details</a>'
    });
    var infowindow1 = new google.maps.InfoWindow({
        content: '<h3>Pullman</h3><p>-34.93099,138.569913</p><p>price: 180$ Per Night</p><a href="page1.html">more details</a>'
    });
    var infowindow2 = new google.maps.InfoWindow({
        content: '<h3>Grand Chancellor</h3><p>-34.93099,138.569913</p><p>price: 180$ Per Night</p><a href="page1.html">more details</a>'
    });
    var infowindow3 = new google.maps.InfoWindow({
        content: '<h3>Continental</h3><p>-34.93099,138.569913</p><p>price: 180$ Per Night</p><a href="page1.html">more details</a>'
    });
    infowindow.open(map,marker);
    infowindow1.open(map,marker1);
    infowindow2.open(map,marker2);
    infowindow3.open(map,marker3);
}

function mapfunction1(){

	var mapOption={center:{lat:-34.920603, lng:138.60622769999998},zoom:7};
	map=new google.maps.Map(document.getElementById("mapinpage3"),mapOption);


}

function mapfunction2(){

    var mapOption={center:{lat:-34.920603, lng:138.60622769999998},zoom:7};
    map=new google.maps.Map(document.getElementById("mapinpage5"),mapOption);


}

function addMarker(){

    var place = {lat:-34.920603, lng:138.60622769999998};
    var marker = new google.maps.Marker({
          position: place,
          map: map
        });

}
function addPost(){
    var con = document.getElementsByTagName("textarea")[0].value;
    var text = document.getElementById("posts");
    var para = document.createElement("P");

    para.className = "date";
    para.innerHTML = Date();    
    
    document.getElementById("posts").append(para);
    document.getElementById("posts").append(con);
}

function createJSON(formElements){
            dat = {}
            console.log(formElements)
            for(i = 0; i <formElements.length; i++){   
                dat[formElements[i].name] = formElements[i].value;
            }
            return(dat)
        }
        function addUser() {

            var form = document.getElementById('addUser');
            var dat = createJSON(form.getElementsByClassName('container'));
            console.log(dat);

            // Create new AJAX request
            var xhttp = new XMLHttpRequest();
            
            xhttp.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    var response = JSON.parse(xhttp.responseText
                        );
                    console.log(response);
                }
            }
            // Initiate connection
            xhttp.open("POST", "/addUser", true);
            
            xhttp.setRequestHeader("Content-type","application/json");
            
            // Send request
            xhttp.send(JSON.stringify(dat));
        } 
        function getCustomers(){
            // Create new AJAX request
            var xhttp = new XMLHttpRequest();

            // Define behaviour for a response
            xhttp.onreadystatechange = function() {
            
                if (this.readyState == 4 && this.status == 200) {
                    var customers = JSON.parse(xhttp.responseText);
                    var select = document.getElementById('CNumber-list');
                    select.innerHTML = "";
                    for(i=0; i<customers.length ; i++){
                        select.innerHTML += "<option value='"+customers[i].CNumber+"'>"+customers[i].name_first+"</option>";
                        
                    }
                    
                }
            };

            // Initiate connection
            xhttp.open("GET", "/getCustomers", true);
            xhttp.send();
        }    



