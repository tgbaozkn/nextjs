import Image from "next/image";
export default async function MovieDetail({params}) {
    const {movie} = params;
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
    const res = await data.json();
    const imagePath = `https://image.tmdb.org/t/p/original/`

  return (
    <div className="object-center">
        <h1 className="text-4xl text-center	mt-5 text-orange-900	 font-extrabold">{res.title}</h1>
        <h2 className="text-2xl text-center	mt-2 ">{res.release_date}</h2>
        <h2 className="text-2xl text-center	mt-2 text-orange-900">{res.runtime} minutes</h2>
        <div  className="object-center flex justify-center">
        <Image  src={imagePath + res.backdrop_path} height={800} width={800} priority/>
            
        </div>
        <h2 className="text-1xl text-center	mt-2 mx-20 indent-4 hover:indent-8">{res.overview}</h2>
    </div>
  )
}
