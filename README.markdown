DECENSOR
========

Decensor is a plugin for jQuery for decensoring text. It uses [Ben Alman's
replaceText plugin](http://benalman.com/projects/jquery-replacetext-plugin/)
for the text replacement.

Usage
-----

This will apply decensor to the whole body, with the default mapping (which
covers "sh!t", "f\*ck" and "b\*llocks"):

    $('body').decensor();

This uses the default mapping, and additionally replaces instances of "twerp"
with "twat":

    $('body').decensor(['twerp', 'twat']);

Use nested arrays for multiple mappings:

    $('body').decensor([['dingle', 'dongle'], ['blooming', 'bloody']]);

Pass `true` as a second argument (or as the only argument) to apply the
opposite transformation. This will effectively censor swear words:

    $('body').decensor(true);

Demo
----

[skilldrick.co.uk/decensor](http://skilldrick.co.uk/decensor/)
