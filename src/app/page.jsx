import Results from "./components/Results";

// const API_KEY = process.env.API_KEY
const API_KEY = "148c419f5a0491e10f12fdf0a52c69ca"


export default async function Home({searchParams}) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(`https://api.themoviedb.org/3/${genre === "fetchTopRated"? "movie/top_rated":"trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`,
  {next:{revalidate:10000}});

  if(!res.ok){
    throw new Error("failed to fetch data");
  }

  const data = await res.json();
  const results = data.results;
  
 
  return ( 
    <div>
      <Results results={results} />
    </div>
  )
}
 