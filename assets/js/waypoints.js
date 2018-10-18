function add_waypoint(el) {
  var waypoint = new Waypoint({
    element: document.getElementById(el),
    handler: function() {
      document.getElementById(el).classList.add("animation")
      console.log('hey')
    },
    offset: '90%'
  })

}

$(document).ready(function() {
  add_waypoint('introduction')
  add_waypoint('events')
  add_waypoint('organizers')
  add_waypoint('more')
  add_waypoint('footer')
});
