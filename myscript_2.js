//ocultamos el div
$('#plantilla').hide();
		//estraemos todo el contenido y el html tambien con .html
		//y el metodo trim eliminamos los espacios
		template = $.trim( $('#plantilla').html() );
		//pasamos el archivo json
		$.getJSON("data.json", function(data){

				//for para decorre las propiedades
				for(datos in data.test.pictogramas){

							var puntaje = data.test.pictogramas[0].respuestas[datos].puntaje

									//replace va sustituir {{titulo}} por lo que tiene data.contenido[datos].titulo
									var temp =
										template.replace(/{{titulo}}/ig, data.test.pictogramas[0].respuestas[datos].respuesta).replace("undefined", " ... ")
												.replace(/{{contenido}}/ig, "Id: " + data.test.pictogramas[0].respuestas[datos].id)
												.replace(/{{ponderacion}}/ig, "Puntaje: " + data.test.pictogramas[0].respuestas[datos].puntaje)

						$(document.body).append(temp);
						//document.getElementById("id01").innerHTML= temp;
				}//de for


    		console.log("Total elementos: " + data.test.pictogramas[0].respuestas[datos].id);  // (o el campo que necesites) dice 72, no es cierto :C:C 
});
