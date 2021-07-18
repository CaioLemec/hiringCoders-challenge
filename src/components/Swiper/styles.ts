import styled from 'styled-components';

export const Container = styled.main `
    .swiper-container {
    width: 600px;
    height: 600px;
    padding: 100px;
    }

    .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    box-shadow: 20px 20px 50px rgba(0,0,0, 0.5);
    border-radius: 35px;
    background: var(--negative-primary);
    overflow-y: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);

        h3 {
            position: absolute;
            top: -1px;
            right: 10px;
            font-size: 4em;
            color: var(--background);
            pointer-events: none;
        }

        span {
            position: absolute;
            bottom: -1px;
            left: 10px;
            font-size: 4em;
            color: var(--background);
            pointer-events: none;
        }
    }

    .swiper-slide img {
    display: block;
    width: 100%;
    }

    .swiper-button-next,
    .swiper-button-prev { 
        color: var(--background); 
    }

    .swiper-pagination-bullet-active {
    opacity: 1;
    background-color: var(--background);
    }

`;

