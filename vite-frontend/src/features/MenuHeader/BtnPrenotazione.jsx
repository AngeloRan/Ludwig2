import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledBtnPrenotazione = styled.span`
  position: relative;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-size: 1.4rem;
  padding-left: 5px;
  letter-spacing: 5px;
  padding-bottom: 4px;
  color: transparent;
  text-transform: uppercase;
  font-weight: 500;
  background-image: linear-gradient(
    to right,
    var(--color-gold-light),
    var(--color-gold)
  );
  background-clip: text;
  transition: all 0.3s;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    border-radius: 2px;
    top: 100%;
    left: 0;
    background-image: linear-gradient(
      to right,
      var(--color-gold-light) 50%,
      var(--color-gold) 50%,
      var(--color-gold) 100%
    );
    background-size: 200%;
    transition: all 0.5s;
  }
  &:hover::after {
    background-position: -100%;
  }
  ${(props) => {
    return (
      props.head === "head" &&
      css`
        display: none;
        @media only screen and (min-width: 768px) {
          display: inline-block;
          position: absolute;
          top: 80%;
          left: 25%;
          ${(props) =>
            props.open &&
            css`
              display: none;
            `}
        }
        @media only screen and (min-width: 768px) and (max-width: 1480px) {
          left: 15%;
        }
      `
    );
  }}

  ${(props) =>
    props.type === "Foot" &&
    css`
      display: none;
      color: var(--color-gold);
      font-weight: 100;
      align-self: flex-start;
      @media only screen and (min-width: 768px) {
        display: inline-block;
      }
    `}
`;

function BtnPrenotazione({ head, open, type }) {
  const [larghezza, setLarghezza] = useState(null);

  useEffect(() => {
    setLarghezza(window.innerWidth);

    function handleResize() {
      setLarghezza(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StyledBtnPrenotazione head={head} open={open} type={type}>
      {larghezza >= 768 && <Link to="prenota">Prenota</Link>}
      {larghezza < 768 && "Prenota"}
    </StyledBtnPrenotazione>
  );
}

export default BtnPrenotazione;
