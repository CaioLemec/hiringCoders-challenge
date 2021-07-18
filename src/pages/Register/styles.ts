import styled from 'styled-components';

export const Container = styled.main `
    max-width: 1480px;
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
        z-index: -2;
        padding: 120px 80px;

        img {
            position: absolute;
            bottom: 5rem;
            max-width: 500px;
            z-index: -1;
        }
    }

        main {
            flex: 1;
            padding: 0 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--background);
        }

        .main-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 320px;
        align-items: stretch;
        text-align: center;

        > img {
            align-self: center;
        }

        form {
            input {
                height: 3rem;
                border-radius: 8px;
                padding: 0 16px;
                background: #fff;
                border: 1px solid var(--negative-primary);
                margin-bottom: 0.5rem;
                transition: 0.2s;

                &:hover {
                    transform: scale(0.95);
                }

                &:focus {
                    border: 3px solid var(--primary-red);
                }
            }

            button, input {
                width: 100%;
            }

            button {
            margin-top: 0.5rem;
            height: 3rem;
            border-radius: 8px;
            padding: 0 16px;
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

            div {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;

                p {
                    margin-left: 1rem;
                    font-size: 1rem;
                    line-height: 3rem;
                }
            }
        }
    }    
`;

