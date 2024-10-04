import { Card, Row, Col } from 'react-bootstrap';

function Dashboard() {
  return (
    <div>
      <h2 className="text-center">Tableau de bord</h2>
      <Row className="justify-content-center mt-4" style={{ gap: '30px' }}>
        {' '}
        {/* Ajout d'un gap pour espacer les colonnes */}
        <Col md={4} className="mb-4">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Total des comptes</Card.Title>
              <Card.Text>100 comptes actifs.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Transactions récentes</Card.Title>
              <Card.Text>50 transactions en attente.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
