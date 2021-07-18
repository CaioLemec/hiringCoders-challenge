import styled from 'styled-components';

export const Container = styled.main `
    display: flex;
    align-items: stretch;
    height: 100vh;
    margin: 0 auto;
    box-shadow: 10px 10px 8px #888888;

    aside {
        flex: 1;
        background: var(--primary-red);
        color: var(--background);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 120px 40px;

        strong {
            font-size: 4rem;
            line-height: 5rem;
            margin-top: 1rem;
            text-align: center;
        }
        
        p {
            font-size: 1.5rem;
            line-height: 2.5rem;
            margin-top: 1rem;
            text-align: center;
        }

    }

        main {
            flex: 1;
            padding: 0 32px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .main-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 400px;
        align-items: stretch;
        text-align: center;

        img {
            transform: rotateY(180deg);
        }

        button {
        margin-top: 2rem;
        height: 50px;
        border-radius: 8px;
        font-weight: 500;
        background: var(--primary-red);
        color: var(--background);
        font-size: 1.5rem;
        line-height: 2rem;
        border: 0;
        transition: 0.2s;

        &:hover {
            filter: brightness(0.9);
        }

        &:active {
            transform: scale(0.9);
        }
    }
}
`;

