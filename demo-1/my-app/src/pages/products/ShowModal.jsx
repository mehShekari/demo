import React from 'react'
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { closeModal } from './ProductSlice';

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #282c346e;
`

const ModalHeader = styled.div`
    width: 100%;
    color: #333;

    span {
      padding: 7px;
      display: block;
      width: 20px;
      cursor: pointer;
      font-size: 20px;
      color: crimson;
    }
`

const ModalContent = styled.div`

    width: 50%;
    z-index: 150;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffff;    
    border-radius: 10px;

    .content_holder {
        height: 95%;
        width: 100%;
    }

    @media(max-width: 1610px) {
      width: 70%;

    }

    @media(max-width: 1010px) {
      width: 90%;

    }
`


const ShowModal = (props) => {
  const { id, status } = props;
  const dispatch = useDispatch();

  const handleClose = (e) => {
    const { target } = e;
    let canClose = target.getAttribute("data-parent")
    if (canClose) {
      dispatch(closeModal(id))
    };
  }

  return (
    <Modal
      data-parent={true}
      onClick={handleClose}
    >
      <ModalContent>
        <ModalHeader>
          <span onClick={() => dispatch(closeModal(id))} className="icon-cancel-circle"></span>
        </ModalHeader>

        <div className='content_holder'>
          {props.children}
        </div>

      </ModalContent>
    </Modal>
  )
}

export default ShowModal