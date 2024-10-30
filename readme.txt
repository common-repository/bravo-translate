=== Bravo Translate ===
Contributors: guelben
Tags: translation, translators, translate, localization, localisation, productivity, simple, easy
Requires at least: 4.4.0
Tested up to: 6.2
Requires PHP: 4.0.2
Stable tag: 1.2
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.htm

The simplest solution for translate foreign texts or replace phrases you don't like. Works with texts coming form your plugins, themes, database or wordpress core. Your translations will be preserved after any update.

== Description ==
 This plugin allow you to translate your monolingual website in a super easy manner. You do not have to bother about .pot .po or .mo files. It safes you a lot of time cause you can effectively transalte thouse texts in a foreign language with just a few clicks gaining productivity.  Bravo translate keeps your translations in your database. You dont have to worry about themes or plugins updates because your translations will not vannish. 

== Installation ==
1. Install the plugin by downloading it through the plugin section on your site or manually upload it via FTP (put it under wp-content/plugins).
2. Activate the plugin under the plugin section. 
3. You are ready to go, click on  Bravo Translate at the admin menu and start translating.

== Screenshots ==
1. The admin page

== Frequently Asked Questions ==
==Some texts are not translated how can I fix it?==

If some of your texts are not translated, inspect your source code and check how they are written in your html. Sometimes the text is altered by css uppercasing. Other times some html tags  may be inside your texts. Do not hesitate to copy thouse html tags.

For instance lets suppose you have this in your source code :

 <h1>This is my <b>super</b> title</h1>
 
The translation of the text "This is my super title" will not work. Instead, copy  "This is my <b>super</b> title" and insert it at the Text to Translate field.

==Does this plugin slows my site?==

This plugin has a very low impact in your page loading time. However try to limit very shorts texts to translate ( text with only 2 or 3 characters long). The plugin will find a lot of ocurrences of thouse short texts and it will have a lot of job to do deciding if it is text to translate or not. 
If you put a lot of texts with just 2 characters, you may increase the loading time by a some millisecs (of course that will also depend on your server performance).


== Screenshots ==
1. the admin section

== Changelog ==
= 1.0 =
* First release
= 1.1 =
* Improved speed
= 1.2 =
* Removed error logs
* Tested up to 6.2