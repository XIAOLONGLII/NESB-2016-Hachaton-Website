function stuff() {
 
    var j=document.forms['myForm']['firstname'].value;
    var k=document.forms['myForm']['lastname'].value;
    var l=document.forms['myForm']['email'].value;
    
    if (j==null || j==""){
        alert("Didn't fill name Field");
        return false;
    }
    else if (k==null || k==""){
        alert("Didn't fill name Field");
        return false;
    }
    else if (l==null || l==""){
        alert("Didn't fill name Field");
        return false;
    }
    else{
        alert('Congrats, you finished the form yay!!!');
        
    }
}


function initMap() {
  var myLatLng = {lat: -25.363, lng: 131.044};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}

