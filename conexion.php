<?phP
$enlace = mysqli_connect ("localhost", "root","","tablero_actividades", "3307");

if(!$enlace){
    die ("no pudo conectarse" .mysqli_error());
    }
    echo"conección existosa";
    mysqli_close($enlace);
?>