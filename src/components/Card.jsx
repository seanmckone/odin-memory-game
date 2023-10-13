function Card({ image, onClick }) {
  return (
    <div className="card">
      <button className="card-button" onClick={onClick}>
        <img
          className="card-image"
          src={image}
          alt="Memory card image. This image api does not support alt text."
        />
      </button>
    </div>
  );
}

export default Card;
