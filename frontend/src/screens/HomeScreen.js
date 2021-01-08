import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const loadProductsData = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    loadProductsData()
  }, [])

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map(p => (
          <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={p} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
