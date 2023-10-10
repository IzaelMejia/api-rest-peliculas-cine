// API traer datos (img,title) de la pelicula de tendencia
async function  getTrendingMoviesPreview() {
    const res= await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=" + API_KEY);
    const data = await res.json();
    const movies = data.results;
    movies.forEach(movie => {
        const trendingPreviewMoviesContainer = //seleccionamos el id (es el de section)
            document.querySelector("#trendingPreview .trending-preview-container-movies");
        // crate div
        const movieContainer = document.createElement("div");
        //agregar calse del div donde etsan las peliculas(la img y el title)
        movieContainer.classList.add("trending-preview-container-movies-img-text");
        // crear imagen 
        const movieImg = document.createElement("img"); 
        // Pasamos calse previamente teniamos de img
        movieImg.classList.add("trending-preview-container-movies-img"); 
        // agregar atributos
        movieImg.setAttribute("alt",movie.title)
        // Agregamos url de la img donde la sacamos, en ese caso la api
        movieImg.setAttribute("src",
            "https://image.tmdb.org/t/p/w300/" + movie.poster_path); 
        //agregar titulo
        const movieTitle = document.createElement("p");
        // Clase del titulo que ya teniamos
        movieTitle.classList.add("trending-preview-container-movies-text"); 
        // Agregar texto al titulo, viene de la  API
        movieTitle.innerHTML = movie.title;           
        // Unimos todo en el div movieContainer
        movieContainer.appendChild(movieImg);
        movieContainer.appendChild(movieTitle);  
        // Encerramos todo en trendingPreviewMoviesContainer (la seccion del html)
        trendingPreviewMoviesContainer.appendChild(movieContainer);        
    })
}

// Funcion para traer datos de las categori (Los generos de las peliculas)
async function  getCategoriesPreview() {
    const res= await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY);
    const data = await res.json();

    const categories = data.genres;
    categories.forEach(category => {
        const previewCategoriesContainer = //seleccionamos el id (es el de section) y la div que queremos agarrar por dentro
            document.querySelector("#categoriesPreview .categories-preview-buttons");

        const buttonCategory = document.createElement("button");
        buttonCategory.classList.add("categories-preview-button");
        buttonCategory.innerHTML = category.name;
        previewCategoriesContainer.appendChild(buttonCategory);        
    })
}

getTrendingMoviesPreview()
getCategoriesPreview()