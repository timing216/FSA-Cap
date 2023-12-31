import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface HomeProps {
  isLoggedIn: boolean;
  cart: { items: Product[]; total: number };
  setCart: React.Dispatch<
    React.SetStateAction<{ items: Product[]; total: number }>
  >;
  searchQuery: string;
}

const Home: React.FC<HomeProps> = ({
  isLoggedIn,
  cart,
  setCart,
  searchQuery,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=50"
        );
        if (!response.ok) {
          throw new Error(
            `Could not reach the store😢: ${response.statusText}`
          );
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("There was an error", error);
      }
    };

    fetchData();
  }, []);

  const handleBuy = (product: Product) => {
    setCart((prevCart) => ({
      items: [...prevCart.items, product],
      total: parseFloat((prevCart.total + product.price).toFixed(2)),
    }));
  };

  return (
    <Container style={{ paddingBottom: "0px" }} className="headerContainer">
      <Row>
        <Col md={8}>
          {products
            .filter((product) =>
              product.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((product) => (
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
        <Col md={4} className="sticky">
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
                className="buyButton"
                variant="info"
                style={{ marginTop: "15px" }}
                onClick={() => handleBuy(selectedProduct)}
              >
                Buy
              </Button>
            </>
          )}
          <div>
            Items in Cart: {cart.items.length}
            <br />
            Total Price: ${cart.total}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
