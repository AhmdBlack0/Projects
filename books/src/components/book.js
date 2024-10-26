function Book(props) {
  return (
    <>
      <img src={props.imageUrl} alt="book-img" />
      <h2>{props.title}</h2>
          <p>{props.content}</p>
    </>
  );
}

export default Book;
