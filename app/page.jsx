import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json();
  return (
    <main className="mx-32 my-5" >
      <h1 className='text-3xl'>Hello</h1>
      <div className="grid  grid-cols-fluid" >
      {res.results.map((movie)=>(
          <Movie 
          key={movie.id}
          id= {movie.id}
          adult = {movie.adult}
          voteavg = {movie.vote_average}
          poster_path= {movie.poster_path}
          release_date = {movie.release_date}
          title={movie.title} />
        ))
      }
      </div>
    </main>
  )
}
