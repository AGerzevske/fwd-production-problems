## ITMD 361, Production Problem 02: HTML Antipatterns, Typographic Grids

For this production problem, you will clean up the different, broken HTML antipatterns in the
`index.html` file in the pp-02/ directory.

There are hints in HTML comments for some mistakes and bad style, but not all. Read every line of
code carefully. Make good use of the W3C HTML Validator and the `htmllint` tool. Remember, too, to
aim for semantic HTML. Valid, linted HTML is not necessarily semantic.

Be sure to make a commit for each fix or group of related fixes. Practice making small,
atomic commits with meaningful commit messages.

Finally, in the `screen.css` file, add the 361 modified, minified reset CSS and set up a basic
typographic grid. Keep your CSS to under 30 lines, not including the reset CSS and comments.

Fixed:
head
Tabulation
head not closed
avoid decorative punctuation marks in <title> tags
Don't add extra space around `=` signs in attribute-value pairs

header
add ul tag
put h1 into header and fixed tabs

main to main 44 (will move)
br b i tags removed
text wrap
extra <
Tabulation
tag typos
close tags
ampersand
div removed

aside
Tabulation
close lists
Close up spaces between content and HTML tags on the same line
p and b tag removal - class="quick-facts-title used instead
don't repeat classes on all inner elements that share a common parent
p removal

footer
small tag


IDK what this is:
id="home"

<a href="http://example.com/index.html" rel="home">HTML Antipatterns</a>
id="navigation"
<li><a href="./">Home</a></li>
<li><a href="../resume/">Resume</a></li>
<li><a href="interests/">Interests</a></li>

<img href="file:///Users/scarlethawk/Desktop/Photo%20Saves/DSC2235.JPEG" alt="Photo of Hank" />
<h3>3rd-Year ITM Undergraduate</h3>
<h4>Majoring in Cybersecurity</h4>
