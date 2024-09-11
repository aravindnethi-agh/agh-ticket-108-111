import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const AffiliateCard = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const AffiliateTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const InfoParagraph = styled.p`
  margin-bottom: 0.5rem;
`;

export const SubTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

export const Link = styled.a`
  color: #3366cc;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.25rem;
`;

export const ListItem = styled.li`
  margin-bottom: 0.25rem;
`;