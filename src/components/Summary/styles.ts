import styled from 'styled-components'

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: -8rem auto 0 auto;

  div {
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 4px;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 500;
    }
    &:nth-child(3) {
      background: var(--green);
      color: var(--shape);
    }
  }
`
