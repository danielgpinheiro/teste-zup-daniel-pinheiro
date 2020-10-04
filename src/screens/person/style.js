import styled from 'styled-components'

const PersonContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  .person-behavior {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    h3 {
      font-size: 22px;
      line-height: 22px;
      color: #43505c;
      font-weight: 600;
    }

    .behavior {
      display: flex;

      input.search {
        width: 34px;
        height: 34px;
        display: block;
        font-size: 14px;
        line-height: 34px;
        border: solid 1px #dee3ee;
        border-radius: 25px;
        transition: width 0.3s ease;
        position: relative;
        background: url('/img/search-icon.svg') 9px 9px no-repeat;
        background-size: 15px 15px;

        &, &::placeholder {
          color: transparent;
        }

        &:focus, &.filled {
          width: 200px;
          color: #43505c;
          padding: 0 15px 0 30px;

          &::placeholder {
            color: #43505c;
          }
        }
      }
    }
  }

  .person-list {
    width: 100%;
    display: block;
    position: relative;

    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;

      li {
        width: 22%;
        height: 120px;
        display: flex;
        border: solid 2px #eceff5;
        border-radius: 5px;
        margin-bottom: 20px;
        margin-right: 4%;

        &:nth-child(4n+4) {
          margin-right: 0;
        }

        &.add-grower {
          button {
            width: 100%;
            background: #f0f2f5;
            border: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: all 0.3s ease;
            position: relative;

            &:hover {
              box-shadow: inset 0 0 30px 14px rgba(50, 50, 50, 0.06);
            }

            img {
              width: 30px;
              height: 30px;
              border: 1px dotted #1565c0;
              border-radius: 50%;
            }

            span {
              padding-top: 10px;
              color: #88939f;
            }
          }
        }

        &:not(.add-grower) {
          padding: 0 45px 0 18px;
          justify-content: flex-start;
          align-items: center;
          position: relative;

          span.label {
            width: 54px;
            height: 54px;
            border-radius: 50%;
            display: block;
            font-size: 25px;
            line-height: 54px;
            font-weight: 500;
            background: #f0f2f5;
            color: #88939f;
            text-align: center;
            flex-shrink: 0;
            margin-right: 15px;
            text-transform: uppercase;
          }

          strong {
            font-size: 15px;
            line-height: 25px;
            color: #495661;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-weight: 600;

            span {
              font-size: 13px;
              font-weight: 400;
              color: #88939f;
            }
          }

          .sub-menu-toggle {
            position: absolute;
            top: 5px;
            right: 5px;
            border: 0;
            background: 0;
            height: 50px;
            cursor: pointer;

            img {
              width: 25px;
              pointer-events: none;
            }

            .sub-menu {
              position: absolute;
              top: -75px;
              left: -20px;
              z-index: 2;
              background: #fff;
              padding: 7px;
              box-shadow: 0 0 5px 0 rgba(50, 50, 50, 0.2);
              opacity: 0;
              pointer-events: none;
              transition: opacity 0.3s ease;
              margin-bottom: 25px;

              &::after {
                position: absolute;
                width: 0;
                height: 0;
                bottom: -10px;
                left: 25px;
                box-sizing: border-box;
                border: 5px solid #fff;
                transform-origin: 0 0;
                transform: rotate(-45deg);
                box-shadow: -3px 3px 3px 0 rgba(0, 0, 0, 0.12);
                content: '';
              }

              &.opened {
                opacity: 1;
                pointer-events: auto;
              }

              &, button {
                border-radius: 3px;
              }

              button {
                display: block;
                width: 100%;
                font-size: 13px;
                line-height: 20px;
                color: #88939f;
                border: 0;
                background: none;
                padding: 5px;
                transition: background 0.15s ease;

                &:hover {
                  background: #f3f3f3;
                }
              }
            }
          }
        }
      }
    }
  }
`

export {
  PersonContainer
}