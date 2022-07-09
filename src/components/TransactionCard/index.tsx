import React from "react";
import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  CreatedAt
} from "./styles";

interface Props {
  title: string;
  amount: string;
  categoryName: string;
  createdAt: string;
  icon: string;
}


const TransactionCard = ({title, icon, amount, categoryName, createdAt}: Props) => {
  return (
    <Container>
        <Title>{title}</Title>
        <Amount>{amount}</Amount>

      <Footer>
        <Category>
          <Icon name={icon}/>
          <CategoryName>{categoryName}</CategoryName>
        </Category>

        <CreatedAt>{createdAt}</CreatedAt>
      </Footer>
    </Container>
  );
};

export default TransactionCard;