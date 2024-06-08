import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../styles/Button'

function HeroSection({ name }) {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1>{name}</h1>
            <h3>Yến sào cao cấp</h3>
            <p>
            Tổ Yến Sào thuộc nhóm thực phẩm giàu dinh dưỡng, chứa nhiều Axit amin, nguyên tố đa, vi lượng, chúng thuộc loại 
            “thực phẩm cao cấp“ ở Á Đông giúp bổi bổ sức khỏe cực tốt. Vậy, mua tổ yến loại nào tốt? Giá tổ yến sào bao nhiêu?
             sẽ được Nest Vui phân tích cụ thể trong bài viết này!
            </p>
            <NavLink to="/">
              <Button>Shop Now</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img src="./images/IMG_0022.jpg" alt="" className="img-style" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    h3 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      text-transform: capitalize;
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: '';
      width: 55%;
      height: 80%;
      background-color:${({ theme }) => theme.colors.bgs};
      position: absolute;
      left: 50%;
      top: -10rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 80%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: '';
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`

export default HeroSection
