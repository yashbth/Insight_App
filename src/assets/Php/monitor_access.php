<?php require_once("./db_connection.php"); ?>


<?php

    // header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PATCH,PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");

    $id = $_POST['id'];

    $sql = "SELECT Monitor_Access,pH_in_monitor,tds_in_monitor FROM Device_Data WHERE DeviceID='$id' LIMIT 1";

    $result = $conn->query($sql);
    if($result->num_rows>0){
        $all_rows = array();    
        while($row = $result->fetch_assoc()){
            $all_rows[]=$row;
        }   
    } 
        
    echo  json_encode($all_rows);
    $conn->close();

?>
