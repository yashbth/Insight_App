<?php require_once("./db_connection.php"); ?>


<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PATCH,PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");

    $id = $_POST['id'];
    $table = $_POST['table'];
    $location='';
    $sql1 = "SELECT Location FROM Device_Data WHERE DeviceID='$id' LIMIT 1";
    $result1=$conn->query($sql1);
    if($result1->num_rows>0){        
        while($row1 = $result1->fetch_assoc()){                                 
            $location=$row1['Location'];
}   
} 
    $sql2 = "SELECT tds_inlet,tds_outlet FROM $table WHERE DeviceID='$id' ORDER BY date DESC LIMIT 1";
    $result = $conn->query($sql2);
    if($result->num_rows>0){
        $all_rows = array();        
        while($row = $result->fetch_assoc()){
            array_walk($row,"unitConv") ; 
            $row['Location']=$location;                                 
            $all_rows[]=$row;
}   
} 
        
    echo  json_encode($all_rows);
    $conn->close();

?>
