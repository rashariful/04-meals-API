const textBox = document.getElementById('text-box').style.display='block';
const loadMeal = (search) => {
    const  url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);

    fetch(url)
    .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
const displayMeals = mealItems =>{
    // console.log(mealItems);
    const mealContainer = document.getElementById('meal-container')
    const textBox = document.getElementById('text-box').style.display = 'none';

    mealContainer.innerHTML="";
mealItems.forEach(meal => {
     console.log(meal);
    const { strCategory, strMeal, strMealThumb, strInstructions } = meal;
    
     const mealDiv = document.createElement('div');
    //  mealDiv.classList.add('cols');
     mealDiv.innerHTML=`
    <div class="shadow-md p-5">
                <img src="${strMealThumb}" alt="">
                <h3 class="text-lg font-semibold capitalize py-3">Meal title: ${strMeal}</h3>
                <p class="text-ingerite pb-2">${strCategory}</p>
                <p class="text-ingerite pb-2">${strInstructions.slice(0, 200) }</p>         
     </div>
     `
     mealContainer.appendChild(mealDiv);
});
}

function searchFood (){
    const serchFeild = document.getElementById('search-feild');
    const serchText = serchFeild.value;
    serchFeild.value ="";
    // console.log(serchText);
    loadMeal(serchText)
}

// loadMeal('fish')