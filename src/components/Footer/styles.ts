import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;
    max-width: 1480px;
    margin: 0 auto;
    background: var(--negative-primary);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    h4 {
        color: var(--background);
        font-weight: 400;
    }
`;