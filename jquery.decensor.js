(function ($) {
  var mapping = [
    ["sh!t", 'shit'],
    ["f*ck", 'fuck'],
    ["b*llocks", 'bollocks'],
  ];

  $.fn.decensor = function (userMapping) {
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
      decensor($(this));
    });
  };

  function decensor($el) {
    var html = $el.html();
    var regex = null;
    var str = '';

    for (var i = 0, len = mapping.length; i < len; i++) {
      str = mapping[i][0];
      if (str instanceof RegExp) {
        regex = str;
      }
      else {
        // http://simonwillison.net/2006/Jan/20/escape/
        str = str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        regex = new RegExp(str, 'g');
      }
      html = html.replace(regex, mapping[i][1]);
    }

    $el.html(html);
  }
})(jQuery);
