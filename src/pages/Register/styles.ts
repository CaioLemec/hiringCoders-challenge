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
        .counter {
            width: 100%;
            max-width: 800px;
            position: absolute;
            left: 0;
            right: 0;
            margin: 0 auto;
            height: 15%;
            top: 10rem;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            background: var(--negative-primary);

            border-radius: 0.5rem;

            > div {
                display: flex;
                margin: 0 auto;
                flex-direction: column;
                flex: 1;
                overflow-y: hidden;
                justify-content: center;
                align-items: center;
                backdrop-filter: blur(5px);

                &:hover {
                    transform: scale(0.95);
                }

                p {
                    font-size: 1.5rem;
                    display: inline;
                    color: var(--background);
                }
                
                span {
                    font-size: 1.5rem;
                    margin-top: 1rem;
                    display: inline;
                    color: var(--background);
                }
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
        margin-top: 10rem;

        form {
            h3 {
                margin-bottom: 0.5rem;
                color: var(--primary-red);
            }

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
        }

        div {
                max-width: 100%;
                display: flex;
                justify-content: space-between;
                margin-top: 2rem;
                
                > a {
                    padding: 0 2rem;
                    background: none;
                    color: var(--primary-red);
                    border: 0;

                }
                
            }
    }    
`;

