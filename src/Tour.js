function Tour({ id, info, price, name, image, removeTour }) {
  return (
    <main>
      <section className="main">
        <img src={image} alt={name} />
        <div className="info">
          <h4>{name}</h4>
          <p>{info}</p>
        </div>
      </section>
      <footer>
        <button onClick={() => removeTour(id)}>Not Interested</button>
        <h4>${price}</h4>
      </footer>
    </main>
  );
}
export default Tour;
