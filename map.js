function initMap()
{
    var kalachowki= { lat: -25.344, lng:131.036};
    var map= new google.maps.Map(document.getElementById('map'),{zoom: 4,center:kalachowki});
    var marker = new goggle.maps.Marker({position:kalachowki,map:map});
}