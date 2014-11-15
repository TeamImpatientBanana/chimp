<?php
 
// Use in the "Post-Receive URLs" section of your GitHub repo.
 
if ( $_POST['payload'] ) {
  shell_exec( 'cd /var/www/impatientbanana.com/public_html/chimp && git reset --hard HEAD && git pull' );
}
 
?>hi