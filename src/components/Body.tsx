import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "/src/App.css";
interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const Body: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <Container>
      <Row>
        <Col md={8}>
          {products.map((product) => (
            <Card key={product.id} style={{ marginBottom: "15px" }}>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Button
                  variant="primary"
                  onClick={() => setSelectedProduct(product)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col md={4}>
          {selectedProduct && (
            <>
              <h3>{selectedProduct.title}</h3>
              <p>ID: {selectedProduct.id}</p>
              <p>Price: ${selectedProduct.price}</p>
              <p>Category: {selectedProduct.category}</p>
              <p>Description: {selectedProduct.description}</p>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                width="100%"
              />
              <Button
                className="buyButton"
                variant="info"
                style={{ marginTop: "15px" }}
              >
                Buy
              </Button>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Body;
