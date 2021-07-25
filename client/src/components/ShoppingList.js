import { plantList } from '../datas/plantList'
const googleTrends = require('google-trends-api');

function ShoppingList() {
    console.log(plantList);
	const categories = plantList.reduce(
		(acc, plant) => 
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	);
    console.log(categories);
    console.log(plantList);
    googleTrends.dailyTrends({
        trendDate: new Date('2019-01-10'),
        geo: 'CI',
      }, function(err, results) {
        if (err) {
          console.log(err);
        }else{
          console.log(results);
        }
      });

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{plantList.map((plant) => (
					<li key={plant.id}>{plant.name}</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList