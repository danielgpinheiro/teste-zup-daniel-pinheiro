import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  min-height: 100vh;
  position: relative;
  display: flex;
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-y: auto;
  background: #dcdee0;
  -webkit-overflow-scrolling: touch;
  padding: 80px 30px 30px;
`

const Header = styled.header`
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: space-between;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 30px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.2);

  ul {
    width: 100%;
    display: block;

    li {
      display: inline-flex;

      a {
        margin: 0 25px;
        height: 54px;
        display: flex;
        align-items: center;

        &.active {
          span {
            color: #12a6bc;
          }
        }

        img {
          width: 20px;
        }

        span {
          font: 14px $opensansregular;
          color: #697785;
          padding-left: 15px;
        }
      }
    }
  }

  .buttons {
    height: 54px;
    display: flex;
    padding: 0 20px;
    border-left: solid 1px #e1e6f0;

    &, button {
      display: flex;
    }

    button {
      flex-grow: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: 0;
      border: 0;
      margin: 0 10px;

      img {
        width: 20px;
      }

      span {
        font: 12px $opensansregular;
        color: #697785;
        font-weight: 600;
        padding-top: 5px;
      }
    }
  }
`

const Content = styled.div`
  width: 100%;
  display: block;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 30px 35px 0;
  height: 100%;
  position: relative;
  z-index: 3;
  overflow: hidden;
`

export {
  Wrapper,
  Container,
  Header,
  Content
}