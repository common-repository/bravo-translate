<?php
/*
Plugin Name: Bravo Translate
Description: The simplest solution for translate foreign texts or replace translations you don't like. Works with texts coming from your plugins, themes, database or wordpress core. Your translations will be preserved after any update. Suitable for monolingual websites.
Version: 1.2
Author: guelben
Author URI: http://www.guelbetech.com
License: GPL version 2 or later
Requires at least: 4.4.0
Requires PHP: 4.0.2
License URI: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
Text Domain: bravo-translate
Domain Path: /languages/

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) exit; 

//we define constants
define('BRAVOTRAN_FILE',__FILE__);
define('BRAVOTRAN_DIR_URL',plugin_dir_url(__FILE__));

//we laod modules
require_once( plugin_dir_path(__FILE__).'functions.php');
require_once( plugin_dir_path(__FILE__).'activation.php');
require_once( plugin_dir_path(__FILE__).'deactivation.php');
require_once( plugin_dir_path(__FILE__).'admin.php');
require_once( plugin_dir_path(__FILE__).'ajax.php');
require_once( plugin_dir_path(__FILE__).'delete.php');


//we load translations
add_action('after_setup_theme', 'bravo_translate_setup');

function bravo_translate_setup(){
    
load_plugin_textdomain('bravo-translate', false, dirname(plugin_basename( __FILE__ )) . '/languages/' );
}

?>