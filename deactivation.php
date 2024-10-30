<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit; 

function BRAVOTRAN__deactivation(){
//we delete option
delete_option("BRAVOTRAN_notice");

}

register_deactivation_hook(BRAVOTRAN_FILE,"BRAVOTRAN__deactivation");

?>