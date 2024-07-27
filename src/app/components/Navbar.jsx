'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container">
          {/* Left Logo for Mobile View */}
          <Link href="#" className="navbar-brand cursor-scale small d-lg-none">
            <Image src="/assets/images/logo/logo.png" width={150} height={50} alt="Logo" />
          </Link>
{/* 
          Toggler for Mobile View on the Right
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNavbar} // Toggle navbar state
              aria-controls="navbarSupportedContent"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
            {/* Left Navigation Menu */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="#" className="nav-link active cursor-scale" aria-current="page">
                   Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link cursor-scale">
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link cursor-scale"> 
                   Services
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link cursor-scale">
                  Technology
                </Link>
              </li>
            </ul>

            {/* Centered Logo for Desktop View */}
            <Link href="#" className="navbar-brand mx-auto d-none d-lg-block cursor-scale">
              <Image src="/assets/images/logo/logo.png" width={200} height={70} alt="Logo" />
            </Link>

            {/* Right Navigation Menu */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="#" className="nav-link cursor-scale">
                     About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link cursor-scale">
                  Insights
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link cursor-scale">
                  Career
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link cursor-scale">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}
