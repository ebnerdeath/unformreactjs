import styled, { css } from "styled-components";

const sizes = {
  small: css`
    height: 28px;
    font-size: 12px;
  `,
  default: css`
    height: 36px;
    font-size: 14px;
  `,
  big: css`
    height: 44px;
    font-size: 18px;
  `
};

const colors = {
  default: css`
    background: #7289da;
    &:hover {
      background: #5f73bc;
    }
  `,
  danger: css`
    background: #e04848;
    &:hover {
      background: #a43d3d;
    }
  `,
  gray: css`
    background: #b9bbbe;
    color: #666;
    &:hover {
      background: #999;
    }
  `
};

export const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SignForm = styled.div`
  background: #34495e;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  margin-left: 150px;
  padding: 40px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  h1 {
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    margin: 0 0 10px;
  }

  h2 {
    margin-bottom: 15px;
    text-align: center;
    justify-content: center;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: red;
  }

  input {
    height: 40px;
    width: 100%;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.1);

    margin-top: 8px;
    transition: border 0.15s ease;
    font-size: 16px;

    &:focus {
      border-color: #4289da;
    }
  }
`;

export const ButtonForm = styled.button`
  border-radius: 3px;
  transition: background-color 0.15s ease;
  background: #7289da;
  border: 0;
  color: #fff;
  font-size: 12px;
  padding: 0 10px;
  text-transform: uppercase;
  font-weight: 700;
  margin: 20px 0 0;
  display: flex;
  width: 100%;
  justify-content: center;

  ${props => sizes[props.size || "default"]};
  ${props => colors[props.color || "default"]};

  ${props =>
    props.filled === false &&
    css`
      background: none;
      &:hover {
        background: none;
        opacity: 0.6;
      }
    `};
`;

export const TableForm = styled.table`
  margin-right: 150px;
  width: 50%;
  text-align: center;

  thead th {
    font-size: 11px;
    color: #b3b3b3;
    letter-spacing: 1.11px;
    font-weight: normal;
    text-transform: uppercase;
    padding: 5px 10px;

    /* &:last-child {
      text-align: left;
    } */
  }

  tbody td {
    border-top: 1px solid #c2c2c2;
    font-size: 13px;
    padding: 0 10px;
    line-height: 40px;
    text-align: center;

    /* &:first-child {
      width: 80px;
      text-align: right;
    }

    &:last-child {
      text-align: right;
    } */
  }

  tbody tr:hover td {
    background: #34495e;
  }

  tbody tr td button {
    height: 20px;
    width: 20px;
    background: transparent;
    border-radius: 3px;
    border: 0;
  }
`;
