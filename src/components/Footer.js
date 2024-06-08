import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import { NavLink } from 'react-router-dom'
import { FaFacebookMessenger, FaVoicemail, FaGoogle } from 'react-icons/fa'; // Import các biểu tượng từ react-icons/fa

function Footer() {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Sẵn sàng để bắt đầu</h3>
            <h3>Liên hệ với chúng tôi hôm nay!</h3>
          </div>
          <div>
            <Button>
              <NavLink to="/contact">Bắt đầu</NavLink>
            </Button>
          </div>
        </div>
      </section>
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>See Nests</h3>
            <p>Yến sào cao cấp. </p>
          </div>
          <div className="footer-subscribe">
            <h3>Subscribe to stay updated</h3>
            <form action="#">
              <input type="text" placeholder="Enter your Email" />
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaFacebookMessenger className="icons" onClick={() => window.location.href = "https://www.facebook.com/NVH44260?mibextid=LQQJ4d"} />
              </div>
              <div>
                <FaVoicemail className="icons" onClick={() => window.location.href = "https://zalo.me/0705645645"} />
              </div>
              <div>
                <FaGoogle className="icons" onClick={() => window.location.href = "https://mail.google.com/mail/u/0/?pli=1#inbox"} />
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>
              <a href="tel:1234567890">+0705645645</a>
            </h3>
          </div>
        </div>
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              &copy; {new Date().getFullYear()} See Nests, All Right Reserved
            </p>
            <div>
              <p>Privacy and Policies</p>
              <p>Terms and Condition</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`

export default Footer
