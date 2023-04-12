
import Link from "next/link";
import Image from "next/image";


export default function Movie(props) {
   const imagePath = `https://image.tmdb.org/t/p/original${props.poster_path}`
  return (
    <div key={props.id}>
           
            <Link href={`/${props.id}`}>     
                <Image src={imagePath} alt=""  width={150} height={150}/>
            </Link>
            <h1>{props.title}</h1>
            <h3> Date : {props.release_date}</h3>
            <hr/>
       
        
    </div>
  )
}
