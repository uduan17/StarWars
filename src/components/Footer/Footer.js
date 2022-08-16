import Card from 'react-bootstrap/Card';
import './footer.css';

function HeaderAndFooterExample() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title><p>Jose Uduan Hurtado</p></Card.Title>
        <Card.Text>
         Aprendiendo a programar
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted"> <p>Todos los derechos reservados ©2022</p></Card.Footer>
    </Card>
  );
}

export default HeaderAndFooterExample;