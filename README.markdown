DECENSOR
========

Decensor is a plugin for jQuery for decensoring text.

Important
---------

This plugin performs a `.html()` replacement, so will remove event handlers and references to elements. If that's a problem, use Ben Alman's [jQuery replaceText](http://benalman.com/projects/jquery-replacetext-plugin/) instead.

Usage
-----

    $('body').decensor();

This will apply decensor to the whole body, with the default mapping (which
covers "sh!t", "f*ck" an "b*llocks").

    $('body').decensor(['twerp', 'twat']);

This uses the default mapping, and additionally replaces instances of "twerp"
with "twat".

    $('body').decensor([['dingle', 'dongle'], ['blooming', 'bloody']]);

Use nested arrays for multiple mappings.

    $('body').decensor([/tw(e|i)rp/g, 'twat']);

It's OK to use regexes as well.
