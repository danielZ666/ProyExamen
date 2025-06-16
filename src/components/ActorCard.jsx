function ActorCard({ nombre, pelicula, imagen }) {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img src={imagen} className="card-img-top" alt={nombre} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{pelicula}</p>
      </div>
    </div>
  );
}

export default ActorCard;