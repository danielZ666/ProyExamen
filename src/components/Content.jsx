import ActorCard from './ActorCard';
import MovieModal from './MovieModal';

function Content({ page }) {
  if (page === "principal") {
    return (
      <div className="container my-4">
        <div className="d-flex justify-content-center">
          <ActorCard nombre="David Santalla" imagen="https://www.eldiario.net/noticias/2015/2015_04/nt150402/f_2015-04-02_51.jpg" />
          <ActorCard nombre="Reunaldo Pacheco"  imagen="https://images.produ.com/wp-content/uploads/2025/05/15113035/bigwp-ReynaldoPachecoActor-948x594.jpg" />
          <ActorCard nombre="Milton Cortez" imagen="https://www.historia.com.bo/imagen/escala/2018/3/a1322/milton-cortez-suarez-historia-com-bo-mx.jpg" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="container my-4 text-center">
        <div className="d-flex flex-wrap justify-content-center gap-3"> {/* Añadí flex-wrap y gap para mejor disposición */}
          <MovieModal 
            titulo="Los Andes no creen en Dios" 
            resumen="Adaptación (2007) de la novela homónima sobre la vida en el altiplano a principios del siglo XX."
          />
          <MovieModal 
            titulo="El Ladron de Perros" 
            resumen="Drama (2019) sobre un ladrón de perros en La Paz, Bolivia, que busca redención."
          />
          <MovieModal 
            titulo="El Cementerio de Elefantes" 
            resumen="Película policial boliviana (2023) que sigue a un detective en Santa Cruz." 
          />
          <MovieModal 
            titulo="La bicicleta de los huanca" 
            resumen="Comedia (2020) sobre un niño que sueña con una bicicleta en el altiplano boliviano."
          />
          <MovieModal 
            titulo="Amargo Mar" 
            resumen="Drama (2021) que narra la vida de un pescador en el lago Titicaca."
          />
        </div>
      </div>
    );
  }
}

export default Content;