import React, { useState, useEffect } from 'react';
import '../styles/GifsList.css'
import { Row, Col, Alert, Container} from "react-bootstrap";

function GifsList() {
	const [listeTrends, setListeTrends] = useState([]);
	const [listeGifs, setListeGifs] = useState([]);

	useEffect(() => {
		fetch("/FR")
		  .then(res => {
			  	//console.log(res.json());
				res.json().then((trends) => {
					fetch("https://api.giphy.com/v1/gifs/search?api_key=xSH32AF8zyddLZCCPBI4gqWUJO8Vpsp8&q="+ encodeURI(trends[0]))
					.then(res => {
						//res.json()
							//console.log(res.json());
							
							res.json().then((result) => {
								setListeTrends(trends)

								setListeGifs(result.data)
								//console.log(result)
							})
						})
		  
				})
			})
		  .then(
			(result) => {
				console.log(result);
			  /*setIsLoaded(true);
			  setItems(result.items);*/
			},
			// Remarque : il faut gérer les erreurs ici plutôt que dans
			// un bloc catch() afin que nous n’avalions pas les exceptions
			// dues à de véritables bugs dans les composants.
			(error) => {
				console.log(error);
			  /*setIsLoaded(true);
			  setError(error);*/
			}
		  );

		

	  }, [])   
	  
	  

	  console.log({listeTrends});
	  console.log({listeGifs});
	return (
		<Container>
			<Row className="mb-5 mt-5">
				<Col ><h3 >Terme recherché : <span className="blue">{listeTrends[0]}</span></h3></Col>
			</Row>
			<Row>
				{listeGifs.map((gif, index) => (
					<Col xs="12" sm="6" md="4" lg="3">
						<img className="image" key={gif.id} src={gif.images.preview_webp.url} alt="loading..." />
					</Col>

				))}
			</Row>
		</Container>
	)
}

export default GifsList