import styled from "styled-components"

export const FormTodoWrapper = styled.form`
height: 45px;
`

export const FormTodoInput = styled.input`
  border: 0;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  height: 100%;
  /* font-size: 18px; */
  border-radius: 6px 0 0 6px;
  padding-left: 5px;
`

export const FormTodoButton = styled.button`
  height: 100%;
  margin: 0;
  background-color: var(--verde);
  color: white;
  padding: 8px;
  border-radius: 0 6px 6px 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border: 0;

  &:disabled{
    background-color: var(--verde-opaco);
    color: gray;
  }
`