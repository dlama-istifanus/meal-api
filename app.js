const mealBtn = document.getElementById('get_meal');
const body = document.getElementById('meal')

mealBtn.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => {
        const meals = data.meals[0];
        console.log(meals)
        body.innerHTML = `
        <div id="row-meal">
            <div id="left-side">
                <img src="${meals.strMealThumb}" id="image"/>
                <p><strong>Category:</strong>${meals.strCategory}</p>
                <p><strong>Area:</strong>${meals.strArea}</p>
                <p><strong>Tags:</strong>${meals.strTags}</p>
                <h5>Ingredents:</h5>
                <ul>
                    
                </ul>
            </div>
            <div id="right-side">
                <h4>${meals.strMeal}</h4>
                <p>${meals.strInstructions}</p>
            </div>
        </div>
            <div id="video">
                <h5>Video Recipe</h5>
                <div class="videoWrapper">
                    <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/${meals.strYoutube.slice(-11)}">
                    </iframe>
                </div>
        </div>
        `;
        let list = document.querySelector('ul');
        for(ing in meals){
            if(ing.includes('strIngredient')){
                console.log(meals[ing]);
                list.insertAdjacentHTML('beforebegin', `<li>${meals[ing]}</li>`);
            }
        }
        let lis = document.querySelectorAll('li');
        lis.forEach((li) => {
            if(li.innerHTML == ''){
                li.style.display = 'none';
            }
        })
    })

})