import React from "react";
import { Card as CardType } from "../../App";
import { CommentType } from "../../App";
import styled from "styled-components";

const Card: React.FC<Props> = ({ openCard, card, comments }) => {
  const commentsCount = comments.filter(
    (comment) => comment.cardId === card.id
  );

  return (
    <Container onClick={() => openCard(card.id)}>
      <div>{card.title}</div>
      <span>Комментарии:&nbsp;{commentsCount.length}</span>
    </Container>
  );
};

const Container = styled.button`
  margin: 5px 0 5px 0;
  padding: 3px;
  width: 100%;
  color: rgb(18, 94, 28);
  border: 2px solid brown;
`;

export default Card;

type Props = {
  openCard: (id: number) => void;
  card: CardType;
  comments: Array<CommentType>;
};
