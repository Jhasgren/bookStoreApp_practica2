<?php
class Pedidos {
    public $id, $fecha, $resumen, $estado, $total;

    function __construct($id, $fecha, $resumen, $estado, $total){
      $this->id=$id;
      $this->fecha=$fecha;
      $this->resumen=$resumen;
      $this->estado=$estado;
      $this->total=$total;
    }
}
$datos[]=new Pedidos(1, "18/10/2014", "Anna karenina (5) / Frankestein (5)", "PAGADO", 195);
$datos[]=new Pedidos(1, "18/10/2014", "Juego de tronos (1)", "NO PAGADO", 140);
echo json_encode($datos);
 ?>
