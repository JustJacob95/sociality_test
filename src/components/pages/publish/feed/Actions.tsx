import React from 'react';
import OptionIcon from '../../../../images/option.svg';
import DeleteIcon from '../../../../images/delete.svg';
import CancelIcon from '../../../../images/cancel.svg';
import ApproveIcon from '../../../../images/approve.svg';


type ActionPostPropsType = {
  status: number
}
const Actions: React.FunctionComponent<ActionPostPropsType> = ({status} : ActionPostPropsType) => {

  const deleteAction = () => {
    alert('delete action')
  }

  const cancelAction = () => {
    alert('cancel action')
  }

  const approveAction = () => {
    alert('approve action')
  }

  const optionAction = () => {
    alert('show more option')
  }

  return(
    <>
      {status === 1 && <>
        <img src={CancelIcon} onClick={cancelAction} title="cancel" alt="cancel"/>
      </>}

      {status === 2 && <>
        <img src={ApproveIcon} onClick={approveAction} title="approve" alt="approve"/>
      </>}

      <img src={DeleteIcon} onClick={deleteAction} title="delete" alt="delete"/>
      <img src={OptionIcon} onClick={optionAction} title="option" alt="option"/>
    </>
  )
}

export default Actions;