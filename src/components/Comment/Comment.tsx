import React, { useState } from "react";
import styled from "styled-components";

const Comment: React.FC<Props> = ({
  author,
  text,
  id,
  deleteComment,
  changeComment,
  user,
}) => {
  const [changeText, setChangeText] = useState(text);

  const [changeBtnClicked, setChangeBtn] = useState(false);

  const toggleChangeInput = (value: boolean): void => {
    setChangeBtn(value);
  };

  const handleChangeClick = (): void => {
    if (user === author) {
      toggleChangeInput(true);
    } else {
      alert("U are not able to change this comment");
    }
  };

  const handleDeleteClick = (): void => {
    if (user === author) {
      deleteComment(id);
    } else {
      alert("U are not able to delete this comment");
    }
  };

  return (
    <CommentContainer>
      {changeBtnClicked ? (
        <>
          <FocusedInput
            defaultValue={text}
            onChange={(e) => setChangeText(e.target.value)}
            autoFocus
          ></FocusedInput>
          <div>
            <Btn
              onClick={() => {
                toggleChangeInput(false);
                changeComment(changeText, id);
              }}
            >
              Сохранить
            </Btn>
            <Btn
              onClick={() => {
                toggleChangeInput(false);
                setChangeText(text);
                changeComment(text, id);
              }}
            >
              &#10006;
            </Btn>
          </div>
        </>
      ) : (
        <CommentContentWrapper>
          <Author>{author} said:&nbsp;&nbsp;</Author>
          <Text>{changeText}</Text>
          <BtnsWrapper>
            <AddBtn onClick={handleChangeClick}>Change</AddBtn>
            <DelBtn onClick={handleDeleteClick}>Delete</DelBtn>
          </BtnsWrapper>
        </CommentContentWrapper>
      )}
    </CommentContainer>
  );
};

const FocusedInput = styled.input`
  width: 100%;
  height: 70px;
  border-radius: 4px;
  margin-top: 5px;
  padding: 10px;
  box-shadow: 0 0 5px 1px #036788;
  background: white;
  cursor: text;
`;
const Btn = styled.button`
  margin: 5px;
  cursor: pointer;
`;
const CommentContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
`;
const CommentContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 80%; ;
`;
const Author = styled.div`
  padding: 5px;
`;
const Text = styled.div`
  word-wrap: break-word;
  border: 2px solid rgb(104, 48, 104);
  padding: 2px;
  width: 100%;
`;
const BtnsWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  margin: 5px 0;
`;
const AddBtn = styled.button`
  display: flex;
  align-self: flex-start;
  cursor: pointer;
  margin-left: 5px;
`;
const DelBtn = styled.button`
  cursor: pointer;
  margin-left: 5px;
`;

export default Comment;

type Props = {
  author: string;
  text: string;
  id: number;
  deleteComment: (arg: number) => void;
  changeComment: (text: string, id: number) => void;
  user: string;
};
