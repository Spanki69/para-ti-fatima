var  c = 0 ;
$ ( "#cambio " ) .click ( función ( ) { 
  si  ( c  ==  1 )  {
  abierto ( ) ;
}
  $ ( "#cambio" ) . html ( "<a onclick='acierto()'>Sí</a>" ) ;
  $ ( "#mover " ) .mostrar ( ) ;
  c = 1 ;
} ) ;

$ ( "#move " ) .hover ( función ( ) { 
  cambiar ( ) ;
} ) ;

$ ( "#no" ) . hover ( función ( )  {
  cambiar ( ) ;
} ) ;

función  acerto ( )  {
  alerta ( "¡gracias mi amor!" ) ;
}

 cambio de función ( )
{
    var  i  =  Math.piso ( Math.random ( ) * 300 ) + 1 ;​​​​
    var  j  =  Matemáticas . piso ( Matemáticas . aleatorio ( ) * 400 ) + 1 ;
    $ ( "#move" ) . css ( { arriba : j + 'px' , izquierda : i + 'px' } ) ;
}
