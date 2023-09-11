import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface HomeProps {
  isLoggedIn: boolean;
}

const Home: React.FC<HomeProps> = ({ isLoggedIn }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=5"
        );
        if (!response.ok) {
          throw new Error(
            `Could not reach the store😢: ${response.statusText}`
          );
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        ("There was an error");
      }
    };

    fetchData();
  }, []);

  return (
    <Container style={{ paddingBottom: "0px" }} className="headerContainer">
      <Row>
        <Col md={8}>
          {products.map((product) => (
            <Card key={product.id} style={{ marginBottom: "15px" }}>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                {isLoggedIn && (
                  <Button
                    variant="primary"
                    onClick={() => setSelectedProduct(product)}
                  >
                    View Details
                  </Button>
                )}
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col md={4}>
          {isLoggedIn && selectedProduct && (
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
                variant="info"
                style={{ marginTop: "15px" }}
                onClick={() => {
                  // scroll the window all the way down
                  window.scrollTo(0, document.body.scrollHeight);
                }}
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

export default Home;
