import styled from "styled-components";

interface Props {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const Button = ({ disabled, onClick, children }: Props) => {
  return (
    <StyledButton
        onClick={onClick}
        disabled={disabled}
        data-testid='button'
    >
        {children}
    </StyledButton>
  )
}

const StyledButton = styled.button<{disabled: boolean}>`
  color: ${props => props.disabled ? '#000' : '#fff'};
  background-color: ${props => props.disabled ? '#d3d3d3' : '#023610'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  border: 1px solid #fff;
  border-radius: 5px;
  font-size: 1em;
`;
