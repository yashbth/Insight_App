<?php require_once("./db_connection.php"); ?>
<?php require_once("./functions.php");?>
<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PATCH,PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");

    $id = $_POST['id'];
    $table = $_POST['table'];
    $sql1 = "SELECT DISTINCT date FROM $table WHERE DeviceID='$id' ORDER BY date DESC LIMIT 14";
    $result1 = $conn->query($sql1);
    if($result1->num_rows>0){
        $all_rows1 = array();      
        while($row = $result1->fetch_assoc()){                                
            $all_rows1[]=$row;
        }   
    } 

$sql2 = "(SELECT Total_Volume_Dispensed,pH_of_water FROM $table WHERE DeviceID='$id' AND date = '".$all_rows1[0]['date']."'ORDER BY date DESC LIMIT 1)
UNION (SELECT Total_Volume_Dispensed,pH_of_water FROM $table WHERE DeviceID='$id' AND date = '".end($all_rows1)['date']."'ORDER BY date DESC LIMIT 1)";
$result2 = $conn->query($sql2);
if($result2->num_rows>0){
    $all_rows = array();        
    while($row = $result2->fetch_assoc()){ 
        array_walk($row,"unitConv");
        $start_date = strtotime($all_rows1[0]['date']);
        $last_date = strtotime(end($all_rows1)['date']);
        $datediff = $start_date - $last_date;  
        $row['length'] = $datediff/(60*60*24);
        $all_rows[]=$row;

        
    }   
}      
    echo  json_encode($all_rows);
    $conn->close();

?>
