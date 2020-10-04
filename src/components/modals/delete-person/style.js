import styled from 'styled-components'
import { rgba } from 'polished'

const Content = styled.div`
  p {
    font-size: 16px;
    line-height: 25px;
    color: #424f5b;
    margin-bottom: 30px;
    text-align: center;
  }
`

const ActionButtons = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 30px auto 0;

  button {
    position: relative;
    min-width: 150px;
    height: 35px;
    font-size: 14px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    align-self: center;
    transition: all 0.3s ease;

    &.primary {
      background: linear-gradient(90deg, rgba(29, 139, 193, 1) 0%, rgba(0, 158, 183, 1) 100%);
      color: #fff;
      box-shadow: 0 7px 5px 0 rgba(228, 245, 247, 1);

      &::before {
        transition: all 0.3s ease;
        z-index: 1;
        content: '';
        width: 100%;
        height: 100%;
        border-radius: 30px;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
      }

      &:hover {
        &::before {
          background: ${rgba('#000', 0.2)};
        }
      }

      &:active {
        &::before {
          background: ${rgba('#000', 0.4)};
        }
      }
    }

    &.secondary {
      background: #fff;
      border: solid 1px #288fc4;
      color: #288fc4;

      &:hover {
        background: ${rgba('#ededed', 0.4)};
        border: solid 1px ${rgba('#ededed', 0.4)};
      }

      &:active {
        background: ${rgba('#ededed', 0.2)};
        border: solid 1px ${rgba('#ededed', 0.2)};
      }
    }

    span {
      display: block;
      $heightLine: 40px;
      height: $heightLine;
      line-height: $heightLine + 2px;
      position: relative;
      z-index: 2;

      &.icon {
        display: none;
        align-items: center;
        justify-content: center;

        img {
          width: 30px;
          display: block;
        }
      }
    }
  }
`

export {
  Content,
  ActionButtons
}