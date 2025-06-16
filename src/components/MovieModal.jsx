import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function MovieModal({ titulo, resumen, imagen }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button 
        variant="primary" 
        onClick={() => setShow(true)} 
        className="m-2"
      >
        {titulo}
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {imagen && (
            <img 
              src={imagen} 
              alt={`Poster de ${titulo}`} 
              className="img-fluid mb-3 rounded"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x450?text=Poster+no+disponible';
                e.target.className = 'img-fluid mb-3 rounded border';
              }}
            />
          )}
          <p className="mt-2">{resumen}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MovieModal;