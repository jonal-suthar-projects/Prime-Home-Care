import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ theme }) => theme.primary};
  white-space: nowrap;
  padding: ${({ $big }) => ($big ? '14px 48px' : '12px 30px')};
  color: ${({ theme }) => theme.textLight};
  font-size: ${({ $fontBig }) => ($fontBig ? '20px' : '16px')};
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const ButtonSubmit = styled.button`
  border-radius: 50px;
  background: ${({ theme }) => theme.primary};
  white-space: nowrap;
  padding: ${({ $big }) => ($big ? '14px 48px' : '12px 30px')};
  color: ${({ theme }) => theme.textLight};
  font-size: ${({ $fontBig }) => ($fontBig ? '20px' : '16px')};
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  width: 100%;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    background: ${({ theme }) => theme.neutralMedium};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;