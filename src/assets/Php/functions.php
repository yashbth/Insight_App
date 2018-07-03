<?php

function redirect_to($location){
    header("Location: ".$location);
    exit;

}
function unitConv(&$value,$key){
    if(substr_count($key,"olume")!=0){
        $value=number_format($value/1000,2);
    }; // To dodge case senstivity;

}
?>