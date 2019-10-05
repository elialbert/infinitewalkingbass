let p1 = 0.8;
let p2 = 0.4;
let p3 = 0.2;
let p4 = 0.1;

$(function() {
  let el = $("#p1Range")
  el.on("change", function(event) {
    p1 = parseFloat(event.target.value) / 100;
  });
  el = $("#p2Range")
  el.on("change", function(event) {
    p2 = parseFloat(event.target.value) / 100;
  });
  el = $("#p3Range")
  el.on("change", function(event) {
    p3 = parseFloat(event.target.value) / 100;
  });
  el = $("#p4Range")
  el.on("change", function(event) {
    p4 = parseFloat(event.target.value) / 100;
  });


  el = $("#show-playing")
  el.on('change', function(event) {
    showInfo = event.target.checked;
  })
});