import { useFetch } from "../hooks/useFetch";
import { statuses } from "../utils/statuses";


export default function Pokemon({ pokemon }) {
   
    const { data, status } = useFetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
   
    if(status)
    if (status === statuses.LOADING) return <p>Cargando...</p>;
    if (status === statuses.ERROR)return <p>Ha ocurrido un error al obtener el pokemon</p>;

   
    return (
        <div className="pokemonCard">
            <h3>{data.name}</h3>
            <img src={data.sprites.front_default} alt={data.name} />
        </div>
    )
}  