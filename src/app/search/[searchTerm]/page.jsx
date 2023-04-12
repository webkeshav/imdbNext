import Results from "@/app/components/Results";

export default async function SearchPage({params}) {
  const API_KEY = "148c419f5a0491e10f12fdf0a52c69ca"
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`);
if(!res.ok){
    throw new Error("Error fetching data");
}
const data = await res.json();
const results = data.results;
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No Results Found</h1>
      )}
      {results && <Results results={results} />}
    </div>
  )
}
