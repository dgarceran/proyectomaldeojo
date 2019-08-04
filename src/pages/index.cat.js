import React from "react"
import Layout from "../components/layout"
import Languages from "../components/links-languages.js"

export default () => {
	const pageName = '';
	return (
	<div>
		<Layout currentLanguage='cat'>
			<h2>Introducció</h2>
			<Languages pageName={pageName}/>
			<p>La gran quantitat de fotografies que processa el nostre cervell diàriament ha fet que perdem la capacitat d’observar a favor del simple fet de veure-hi. Mal de Ojo és un projecte col·laboratiu que indagarà i pretén recuperar la nostra visió perifèrica del món actual centrant-nos en allò que ha sigut silenciat per l’elit de poder: les lluites socials. El mètode de treball serà l’agrupació de casos temàticament i la seva dissecció amb la intenció de relacionar-los amb esdeveniments de la mateixa tipologia a diferents llocs del món. Així crearem un mapa relacional de protestes d’aquest mateix instant i en el passat recent que ens permetrà avaluar més detalladament en quin moment polític i de desenvolupament social ens trobem, comparar-lo amb altres moments de la història i observar el camí que recorrem amb més claredat.</p>
			<p>Convoquem a tots aquells individus capaços d’aportar imatges, sigui quin sigui el mitjà -fotogràfic- de base. La data límit és el 16 de novembre del 2019. Es requereix una mostra d’una o més lluites o protestes socials, amb un text associat que expliqui amb claredat i brevetat el context. Utilitza la millor qualitat d’imatge que puguis. Es valorarà especialment la qualitat artística de la fotografia. Per descomptat, és necessari que l’autoria de la fotografia sigui de la persona que l’envia. </p>
			<p>Les imatges seleccionades seran compartides a les nostres xarxes socials, seran impreses en una publicació editorial en format revista amb les conclusions de l’estudi i es podran veure en una exposició final on es mostrarà al públic el nostre treball.</p>
			<p>Per enviar les fotografies entra a proyectomaldeojo.com/envia i llegeix les instruccions, o envia’ns un correu a envia@proyectomaldeojo.com. Es revisaran tots els projectes.</p>
		</Layout>
  	</div>
)}
