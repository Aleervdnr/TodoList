import styled,{css} from 'styled-components'

export const TaskListWrapper = styled.ul`
  width: 100%;

`

export const TaskListNone = styled.li`
  width: 100%;
  text-align: center;
  list-style: none;
  margin: 15px 0;
`

export const DeleteAllButton = styled.button`
  margin: 0 auto;
  display: block;
  padding: 8px;
  border: 0;
  background-color: #9e0e0e;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

//item
export const TaskWrapper = styled.li`
  list-style: none;
  padding: 10px;
  display: grid;
  gap: 5px;
  grid-template-columns: 20px 200px 20px;
  align-items: center;
  text-transform: capitalize;
  width: 100%;
  margin-left: 15px;

  & span{
    transition: opacity 1s;
  }
`

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 50%;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: background-color .5s;
  
  ${(props) =>
			props.completado && css`
        background-color: var(--verde);
			`}
`

export const Remove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`