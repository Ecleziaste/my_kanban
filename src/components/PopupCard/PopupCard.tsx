import React, { useState } from "react";
import Comment from "../Comment";
import { Card } from "../../App";
import { CommentType } from "../../App";
import styled from "styled-components";

const PopupCard: React.FC<Props> = ({
  card,
  columnTitle,
  closeCard,
  deleteCard,
  deleteAllComments,
  changeDescription,
  comments,
  createComment,
  deleteComment,
  changeTitle,
  changeComment,
  user,
}) => {
  const [text, setText] = useState("");

  const [changeDesc, setChangeDesc] = useState(card.description);
  const handleChangeDesc = (value: string) => {
    setChangeDesc(value);
  };

  const [activeDescriptionInput, setActiveDescriptionInput] = useState(false);
  const toggleDescriptionInput = (value: boolean): void => {
    setActiveDescriptionInput(value);
  };

  const [activeCommentInput, setActiveCommentInput] = useState(false);
  const toggleCommentInput = (value: boolean): void => {
    setActiveCommentInput(value);
  };

  const commentsByCardId = comments.filter(
    (comment) => comment.cardId === card.id
  );

  const clickedParent = () => {
    closeCard(null);
  };

  return (
    <Wrapper onClick={clickedParent}>
      <Popup
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Header>
          <Title>
            <div
              contentEditable={true}
              suppressContentEditableWarning={true}
              onInput={(e) => changeTitle(e.currentTarget.textContent)}
            >
              {card.title}
            </div>
            <div>By {card.author}</div>
            <div> From column '{columnTitle}'</div>
          </Title>
          <CloseCard onClick={() => closeCard(null)}>X</CloseCard>
        </Header>
        <Body>
          <Description>
            <h4>Description:</h4>
            <DescriptionText>{card.description}</DescriptionText>
            <div>
              {activeDescriptionInput ? (
                <div>
                  <FocusedDescInput
                    defaultValue={card.description}
                    placeholder="???????????????? ?????????????????? ???????????????? ??????????..."
                    onChange={(e) => {
                      handleChangeDesc(e.target.value);
                    }}
                    autoFocus
                  ></FocusedDescInput>
                  <PopupDescriptionAddBtn
                    onClick={() => {
                      toggleDescriptionInput(false);
                      changeDescription(changeDesc);
                    }}
                  >
                    ??????????????????
                  </PopupDescriptionAddBtn>
                  <PopupDescriptionCancelBtn
                    onClick={() => {
                      toggleDescriptionInput(false);
                      changeDescription(card.description);
                    }}
                  >
                    &#10006;
                  </PopupDescriptionCancelBtn>
                </div>
              ) : (
                <DescInput
                  onClick={() => toggleDescriptionInput(true)}
                  placeholder="???????????????? ?????????????????? ???????????????? ??????????..."
                ></DescInput>
              )}
            </div>
          </Description>
          <Hr></Hr>
          <CommentsWrapper>
            {activeCommentInput ? (
              <PopupCommentInput>
                <CommentsInput
                  autoFocus
                  placeholder="???????????????? ??????????????????????..."
                  onChange={(e) => setText(e.target.value)}
                  onBlur={() => {
                    createComment(text);
                    setText("");
                    toggleCommentInput(false);
                  }}
                ></CommentsInput>
                <CommentsAddBtn
                  onClick={() => {
                    createComment(text);
                    setText("");
                    toggleCommentInput(false);
                  }}
                >
                  ????????????????
                </CommentsAddBtn>
              </PopupCommentInput>
            ) : (
              <InactivePopupCommentInput
                onClick={() => toggleCommentInput(true)}
                placeholder="???????????????? ??????????????????????..."
              ></InactivePopupCommentInput>
            )}
            <CommentsContainer>
              {commentsByCardId &&
                commentsByCardId.map((comment) => {
                  return (
                    <Comment
                      author={comment.author}
                      text={comment.text}
                      key={comment.id}
                      id={comment.id}
                      deleteComment={deleteComment}
                      changeComment={changeComment}
                      user={user}
                    />
                  );
                })}
            </CommentsContainer>
          </CommentsWrapper>
        </Body>

        <DelCardBtn
          onClick={() => {
            deleteCard(card.id);
            deleteAllComments();
          }}
        >
          delete dis card
        </DelCardBtn>
      </Popup>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  overflow: scroll;
  z-index: 500;
`;
const Popup = styled.div`
  background-color: rgba(131, 120, 120, 0.95);
  display: flex;
  flex-flow: column wrap;
  width: 500px;
  margin: 5% auto;
  padding: 10px;
  z-index: 501;
  border: 3px solid black;
  border-radius: 10px;
`;
const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 5px;
`;
const Title = styled.div`
  align-self: center;
  margin: 5px;
`;
const CloseCard = styled.button`
  display: block;
  width: 35px;
  height: 35px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding: 5px;
`;
const Description = styled.div`
  width: 95%;
  margin: 5px;
  cursor: pointer;
`;

const DescriptionText = styled.div`
  word-wrap: break-word;
  overflow: clip;
`;
const FocusedDescInput = styled.input`
  width: 100%;
  height: 70px;
  border-radius: 4px;
  margin-top: 5px;
  padding: 10px;
  box-shadow: 0 0 5px 1px #036788;
  background: white;
  cursor: text;
`;
const DescInput = styled.input`
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  border-radius: 4px;
  margin-top: 5px;
  padding: 10px;
`;
const CommentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;
const Hr = styled.hr`
  margin: 15px 0;
`;
const PopupCommentInput = styled.div`
  width: 80%;
  cursor: text;
  display: flex;
  flex-flow: column nowrap;
  border-radius: 4px;
  margin: 5px;
  padding: 10px;
`;
// FIXME: ???????????????? ???????? ?????????????? ???????????????????? ?????????????? PopupCommentInput
const InactivePopupCommentInput = styled.input`
  width: 80%;
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  border-radius: 4px;
  margin: 5px;
  padding: 10px;
`;
const CommentsAddBtn = styled.button`
  width: 20%;
  margin: 15px 0 20px -10px;
  background-color: rgb(163, 236, 89);
  border-radius: 5px;
`;
const PopupDescriptionCancelBtn = styled.button`
  cursor: pointer;
  margin: 5px;
`;
const PopupDescriptionAddBtn = styled.button`
  cursor: pointer;
  margin: 5px;
`;
const CommentsInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  margin: -10px;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px 1px #036788;
    background: white;
  }
`;

const DelCardBtn = styled.button`
  display: flex;
  align-self: flex-end;
  border-radius: 4px;
  margin: 5px;
  padding: 10px;
  cursor: pointer;
`;
const CommentsContainer = styled.div`
  display: flex;
  flex-flow: column-reverse nowrap;
  width: 100%;
`;

export default PopupCard;

type Props = {
  card: Card;
  comments: Array<CommentType>;
  columnTitle: string;
  closeCard: (arg: any) => void;
  deleteCard: (arg: any) => void;
  deleteAllComments: () => void;
  changeDescription: (description: string) => void;
  createComment: (arg: string) => void;
  deleteComment: (arg: number) => void;
  changeTitle: (args: any) => void;
  changeComment: (text: string, id: number) => void;
  user: string;
};
