DECENSOR
========

Decensor is a plugin for jQuery for decensoring text.

Important
---------

This plugin performs a `.html()` replacement, so will remove event handlers and references to elements. If that's a problem, use Ben Alman's [jQuery replaceText](http://benalman.com/projects/jquery-replacetext-plugin/) instead.

Usage
-----

This will apply decensor to the whole body, with the default mapping (which
covers "sh!t", "f\*ck" an "b\*llocks"):

    $('body').decensor();

This uses the default mapping, and additionally replaces instances of "twerp"
with "twat":

    $('body').decensor(['twerp', 'twat']);

Use nested arrays for multiple mappings:

    $('body').decensor([['dingle', 'dongle'], ['blooming', 'bloody']]);

It's OK to use regexes as well:

    $('body').decensor([/tw(e|i)rp/g, 'twat']);

Demo
----

[skilldrick.co.uk/decensor](http://skilldrick.co.uk/decensor/)
