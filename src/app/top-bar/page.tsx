'use client';

import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';
import SelectFiscalYear from "../selectfiscalyear/page";

export default function Top_Bar() {
  const [fiscalYear, setFiscalYear] = useState('2024-2025');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fy = localStorage.getItem('fiscalYear');
      if (fy) setFiscalYear(fy);
    }
  }, []);

  return (
    <div className="bootstrap-scope">
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>MS & Co. ({fiscalYear})</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
            {/* Left Side Links */}
            <Nav className="me-auto">
              {/* Master */}
              <NavDropdown title="Master" id="master-nav-dropdown">
                <NavDropdown.Item as="span">
                  <Link href="/user" className="nav-link">USER</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="span">
                  <Link href="/narration" className="nav-link">Types/Narration</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="span">
                  <Link href="/fiscalyear" className="nav-link">Fiscal Year</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <div className="nav-link"><SelectFiscalYear /></div>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/login" className="nav-link">Log out</Link>
                </NavDropdown.Item>
              </NavDropdown>

              {/* Entry */}
              <NavDropdown title="Entry" id="entry-nav-dropdown">
                <NavDropdown.Item as="span">
                  <Link href="/accounts" className="nav-link">Accounts</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="span">
                  <Link href="/cashbook" className="nav-link">Cash Book</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="span">
                  <Link href="/journal-voucher" className="nav-link">Journal Voucher</Link>
                </NavDropdown.Item>
              </NavDropdown>

              {/* Reports */}
              <NavDropdown title="Reports" id="reports-nav-dropdown">
                <NavDropdown title="Ledger" id="ledger-sub-dropdown" drop="end" className="dropdown-submenu mx-2">
                  <NavDropdown.Item as="span">
                    <Link href="/reports/ledger" className="nav-link">Basic Ledger</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item as="span">
                    <Link href="/reports/interest" className="nav-link">Interest</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item as="span">
                    <Link href="/reports/balances" className="nav-link">Balances</Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Item as="span">
                  <Link href="/reports/cbk" className="nav-link">Cash Book</Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="span">
                  <Link href="/reports/journal-voucher" className="nav-link">Journal Voucher</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => alert('Under Construction 🚧')}>
                  Balance Sheet
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => alert('Under Construction 🚧')}>
                  Profit/Loss
                </NavDropdown.Item>
              </NavDropdown>

              {/* Settings */}
              <NavDropdown title="Setting" id="setting-nav-dropdown">
                <NavDropdown.Item onClick={() => alert('Coming soon 🚧')}> Layout </NavDropdown.Item>
                <NavDropdown.Item onClick={() => alert('Coming soon 🚧')}> View </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* Right Side Link (Market/Mandi) */}
            <Nav className="ms-auto">
              <Nav.Link as={Link} href="/market" className="nav-link">
                Market
              </Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}