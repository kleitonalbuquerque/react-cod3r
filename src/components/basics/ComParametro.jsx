export default function ComParametro(props) {
  console.log(props);
  console.log(typeof props.nota);
  const status = props.nota >= 7 ? "Aprovado(a)" : "Recuperação";
  return (
    <div>
      <h2>{props.situacao}</h2>
      <p>
        <strong> {props.aluno} </strong>
        tem nota
        <strong> {props.nota} </strong>e está <strong> {status} </strong>
      </p>
    </div>
  );
}
