import React from 'react'
import { useState } from 'react';
import './Dashboard.css'
import { Container, Row, Col ,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChartofAccounts from './pages/ChartofAccounts';
import Deductions from './pages/Deductions';
import Fund from './pages/Fund';
import Scheme from './pages/Scheme';
import Contractor from './pages/Contractor';






const Dashboard = () => {

  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (eventKey) => {
    setActiveLink(eventKey);
  };

  const renderPage = () => {
    switch (activeLink) {
      case 'chartofaccount':
        return <ChartofAccounts />;
      case 'contractor'  :
        return<Contractor/>;
      case 'deductions':
        return <Deductions />;
      case 'fund':
        return <Fund />;
      case 'scheme':
        return <Scheme />;
      default:
        return <ChartofAccounts />;
    }
  };

  return (
    
      
    <Container fluid>
    <Row>
      <Col sm={3} className="sidebar sidebar-black">
        <Nav className="flex-column">
          <Nav.Link
            eventKey="chartofaccount"
            href="#chartofaccount"
            onClick={() => handleLinkClick('chartofaccount')}
            active={activeLink === 'chartofaccount'}
          >
            ChartofAccounts
          </Nav.Link>
          <Nav.Link
            eventKey="deductions"
            href="#deductions"
            onClick={() => handleLinkClick('deductions')}
            active={activeLink === 'deductions'}
          >
            Deductions
            </Nav.Link>
          <Nav.Link
            eventKey="contractor"
            href="#contractor"
            onClick={() => handleLinkClick('contractor')}
            active={activeLink === 'contractor'}
          >
            Contractor
          </Nav.Link>
          <Nav.Link
            eventKey="fund"
            href="#fund"
            onClick={() => handleLinkClick('fund')}
            active={activeLink === 'fund'}
          >
            Fund
          </Nav.Link>
          <Nav.Link
            eventKey="scheme"
            href="#scheme"
            onClick={() => handleLinkClick('scheme')}
            active={activeLink === 'scheme'}
          >
            Scheme
          </Nav.Link>
        </Nav>
      </Col>
      <Col sm={9} className="dashboard">
        {renderPage()}
      </Col>
    </Row>
  </Container>
   
  )
}

export default Dashboard

