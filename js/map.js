function initMap() {
    const options = {
        zoom: 8,
        center: {
            lat: 52.2297700,
            lng: 21.0117800
        }
    }
    const map = new google.maps.Map(document.getElementById('map'), options);

    const marker = new google.maps.Marker({
        position: {
            lat: 52.2297700,
            lng: 21.0117800
        },
        map: map
    })
}