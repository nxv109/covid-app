import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;

  .menu-logo {
    width: 30%;

    & a {
      font-size: 3rem;
      color: #fbb040;
      text-decoration: none;
    }
  }

  .menu-box-login {
    width: 30%;
    text-align: right;
  }

  .menu-box {
    width: 40%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-left;
    font-size: 1.3rem;

    & li a {
      color: #fff;
      text-decoration: none;
      transition: all 0.5s;
    }

    & li a:hover {
      color: rgb(251, 176, 64);
      text-shadow: 0 0px 15px rgb(141, 86, 4), 0 0px 20px rgb(249, 249, 249);
    }

    & li {
      list-style: none;
    }

    & li:not(last-child) {
      margin-right: 1rem;
    }
  }
`;
