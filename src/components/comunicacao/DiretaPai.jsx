import DiretaFilho from "./DiretaFilho";

export default (props) => {
  return (
    <div>
      <DiretaFilho nome="Filho 1" idade={17} nerd={true} />
      <DiretaFilho nome="Filho 2" idade={15} nerd={false} />
      <DiretaFilho nome="Filho 3" idade={2} nerd={true} />
    </div>
  );
};
