(function() {
  console.log("Hello");

  // element argument can be a selector string
  // for an individual element
  var flkty = new Flickity(".hero__slider", {
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    pageDots: false,
    autoPlay: 3000
  });
})();
