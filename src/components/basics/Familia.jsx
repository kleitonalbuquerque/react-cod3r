export default (props) => {
  return (
    <div>
      {Array(10).fill(7)}
      {props.children}
    </div>
  );
};
