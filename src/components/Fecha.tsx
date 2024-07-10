import { useEffect } from "react";

export const Fecha = () => {

  const obtenerFechas = () => {
    // Obtenemos la fecha actual y la guardamos en la variable date
    const myDate = new Date();
    console.log(myDate)
    // Obtenemos la fecha 30 de Enero de 2018, a las 23h 30m 14seg
    const myDate2 = new Date("2018/01/30 23:30:14");
    console.log(myDate2)
    // Obtenemos la fecha del juicio final a partir de un timestamp o Tiempo UNIX
    const myDate3 = new Date(872817240000);
    console.log(myDate3)
    // Creamos una fecha pasando cada uno de sus componentes numéricos*
    const myDate4 = new Date(2018, 0, 30, 23, 30, 14, 0);
    console.log(myDate4)

  }
  // https://lenguajejs.com/javascript/fechas/date-fechas-nativas/

  useEffect(() => {
    obtenerFechas()
  }, [])

  return <>
    <h1>Fecha</h1></>
}