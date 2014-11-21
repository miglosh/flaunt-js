Too bad Todd Motto stopped maintaining this great little plugin.

I was happy to find this one! Unfortunately, it had a little bug in it:

After toggling the mobile menu on and off again, and then switching from a smaller screenwidth to a larger one, the menu disappeared, as the jQuery .toggle() function left the style "display:none;" in the respective element.

I changed this behaviour by removing the style attribute with .removeAttr() altogether.

Same problem with the submenu items - same fix :-)

I'm not a JavaScript coder per se - so excuse my coding style.

Comments and improvements welcome.

Cheers,
Miglosh.
