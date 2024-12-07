function Child(props) {
  return (
    <>
      <h2>Este es el componente hijo</h2>
      <p>{props.msg}</p>
      <div>
        {props.person.sex} - {props.person.age}
      </div>
    </>
  );
}

export default Child;
