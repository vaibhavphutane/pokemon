import { Card } from "react-bootstrap";

const Pokecard = ({ name, imageUrl, ability }) => {
  return (
    <Card>
      <Card.Img variant="top" style={{background: "#55585a"}} src={imageUrl} className="pokemon-img" alt="pokemon"/>
      <Card.Body style={{background: "#232324", color:"#fff"}}>
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted text-center">{ability}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};
export default Pokecard;