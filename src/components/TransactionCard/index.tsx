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

interface Category {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  type: 'credited' | 'debited'
  title: string;
  amount: string;
  createdAt: string;
  category: Category;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard ({data}: Props) {
  return (
    <Container>
        <Title>{data.title}</Title>
        <Amount type={data.type}>
          {data.type === 'debited' && '- '}
          {data.amount}
        </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon}/>
          <CategoryName>{data.category.name}</CategoryName>
        </Category>

        <CreatedAt>{data.createdAt}</CreatedAt>
      </Footer>
    </Container>
  );
};