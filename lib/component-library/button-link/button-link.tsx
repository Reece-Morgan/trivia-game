import Link from "next/link";
import styled from "styled-components";

interface Props {
  href: string;
  children: React.ReactNode;
}

export const ButtonLink = ({ href, children }: Props) => {
  return (
    <StyledButton data-testid='button-link'>
      <StyledLink href={href}>
        {children}
      </StyledLink>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  color: #fff;
  background-color: #023610;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 5px;
  font-size: 1em;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;
