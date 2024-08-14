import styled from 'styled-components'

export const FormHero = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  text-align: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #a7727d;
    content: '';
    opacity: 0.7;

    @media (max-width: 768px) {
      height: 87%;
      padding: 24px 0;
    }
  }
`
export const Div = styled.div`
  position: relative;
  color: #eee;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`
export const H2 = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
