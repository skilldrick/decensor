(function ($) {
  var mapping = [
    ["sh!t", 'shit'],
    ["f*ck", 'fuck'],
    ["b*llocks", 'bollocks'],
  ];

  $.fn.decensor = function (userMapping, censor) {
    //Check array was supplied
    if (userMapping instanceof Array) {
      //If nested array then concat
      if (userMapping[0] instanceof Array) {
        mapping = mapping.concat(userMapping);
      }
      else {
        mapping.push(userMapping);
      }
    }

    return this.each(function () {
      decensor($(this), censor);
    });
  };

  function decensor($el, censor) {
    var html = $el.html();
    var from = '';
    var to = '';
    var regex = null;

    for (var i = 0, len = mapping.length; i < len; i++) {
      if (censor) {
        from = mapping[i][1];
        to = mapping[i][0];
      }
      else {
        from = mapping[i][0];
        to = mapping[i][1];
      }
      // http://simonwillison.net/2006/Jan/20/escape/
      from = from.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      regex = new RegExp(from, 'g');
      console.log(regex);
      html = html.replace(regex, to);
    }
    console.log(html);
    $el.html(html);
  }
})(jQuery);
