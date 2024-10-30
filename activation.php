<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit; 

function BRAVOTRAN__activation(){
//we set option
add_option( "BRAVOTRAN_notice",true);
//creation of table at database
global $wpdb;
if(!BRAVOTRAN_table_exists($wpdb->base_prefix."bravo_translate")){

$sql="CREATE TABLE `".DB_NAME."`.`".$wpdb->base_prefix."bravo_translate` ( `ID` INT NOT NULL AUTO_INCREMENT , `searchFor` TEXT NOT NULL , `replaceBy` TEXT NOT NULL , PRIMARY KEY (`ID`)) ENGINE = InnoDB;";
$wpdb->query($sql);
}
}
register_activation_hook(BRAVOTRAN_FILE,"BRAVOTRAN__activation");

function BRAVOTRAN_table_exists($myTable)
{
    global $wpdb;
	$results = $wpdb->query("SHOW TABLES LIKE '{$myTable}'");
	if( $results->num_rows == 1 )
	{
	        return TRUE;
	}
	else
	{
	        return FALSE;
	}
}

?>