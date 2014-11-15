<?php

$gitpull = system('cd /var/www/impatientbanana.com/public_html/chimp', $retval);

// Printing additional info
echo '
Last line of the output: ' . $gitpull . '
Return value: ' . $retval;
?>