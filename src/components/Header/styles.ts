import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;
    max-width: 1480px;
    margin: 0 auto;
    background: var(--negative-primary);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 20rem;
        padding-left: 2rem;
    }

    button {
        font-size: 1rem;
        color: var(--background);
        background: var(--primary-red);
        border: 0;
        padding: 0 2rem;
        margin: 0 1rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.9);
        }

        &:active {
            transform: scale(0.9);
        }
    }
`;