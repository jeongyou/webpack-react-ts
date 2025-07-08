import { css } from '@emotion/react';

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return <button css={buttonStyle}>{label}</button>;
};

export default Button;

const buttonStyle = css`
  background-color: #3b82f6; /* bg-blue-500 */
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem; /* py-2 px-4 */
  border-radius: 0.375rem; /* rounded */
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #2563eb; /* hover:bg-blue-600 */
  }
`;
