import styled from 'styled-components'
import { rgba } from 'polished'

const Modal = styled.div`
  background: #fff;
  padding: 30px 50px;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0px 0px 21px 0 rgba(13, 35, 35, 0.4);
  transform: ${props => props.opened ? 'scale(1, 1)' : 'scale(0.9, 0.9)'};
  width: ${props => props.width ? `${props.width}px` : '600px'};
  border-radius: 10px;

  button.btn-close-modal { 
    border: none;
    position: absolute;
    top: -2px;
    right: -2px;
    background: transparent;
    padding: 4px;
    transition: all 0.3s ease;

    &:hover {
      transform: rotate(90deg); 
    }

    img {
      width: 20px;
      display: block;
    }
  }

  h1.modal-title {
    font-size: 18px;
    text-align: center;
    margin-bottom: 25px;
  }
`

const ContainerModal = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  padding: 40px 0;
  transition: all 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${rgba('#0a1a26', 0.5)};
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.opened ? 1 : 0};
  visibility: ${props => props.opened ? 'visible' : 'hidden'};
`

export {
  ContainerModal,
  Modal
}