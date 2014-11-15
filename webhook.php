<?php

$gitpull = shell_exec('cd /var/www/impatientbanana.com/public_html/chimp && git pull');

// Printing additional info
echo '
Last line of the output: ' . $gitpull . '
?>