/* eslint-disable react/prop-types */

const CardDynamic = (props) => {
  return (
    <div className="Card">
      <h2>{props.nazev}</h2>
      <p>{props.popis}</p>
      <a href="#">{props.odkaz}</a>
    </div>
  );
};

export default CardDynamic;
