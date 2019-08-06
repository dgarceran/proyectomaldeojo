import React from "react"
import Layout from "../components/layout"
import Languages from "../components/links-languages.js"

export default () => {
	const pageName = 'Proyecto Mal de Ojo';
	
	return (
	<div>
		<Layout currentLanguage='es' pageName={pageName} isHome='true' >
			<h2>Introducción</h2>
			<Languages pageName="" />
		    <p>La cantidad ingente de fotografías que se procesan en nuestro cerebro en el día a día han hecho que perdamos la capacidad de observar en favor del simple hecho de ver. Mal de Ojo es un proyecto colaborativo que indagará y pretende recuperar nuestra visión periférica del mundo actual centrándonos en aquello que ha sido más acallado por cualquier élite del poder: la lucha social. El método de trabajo será la agrupación de casos temáticamente y su disección con la intención de relacionarlos con eventos del mismo tipo en diferentes lugares del mundo. Así crearemos un mapa relacional de protestas en este instante y en el pasado reciente que nos permitirán evaluar más detalladamente en qué momento político y de desarrollo social nos encontramos, compararlo con otros momentos de la historia y observar el camino que recorremos con más claridad.</p>
		    <p>Convocamos a todo individuo capaz de aportar imágenes, sea cual sea su medio –fotográfico– de base. La fecha límite es el 16 de noviembre de 2019. Se necesita una muestra de una o más luchas, protesta y/o reclama social, con un texto asociado que explique con claridad y brevedad su contexto. Utiliza la mejor calidad de imagen que puedas. Se valorará en especial la calidad artística de la fotografía. Por supuesto, se requiere que la autoría de la fotografía sea de la persona que la envía.</p>
		    <p>Las imágenes seleccionadas serán compartidas en nuestras redes sociales, serán impresas en una publicación editorial en formato revista con las conclusiones del estudio y se podrán ver en una exposición final donde se mostrará de cara al público nuestro trabajo.</p>
		    <p>Para enviar fotografías entra en proyectomaldeojo.com/envia y lee las instrucciones, o envía un mail a envia@proyectomaldeojo.com. Se revisarán todos los proyectos.</p>
  		</Layout>
  	</div>
)}
