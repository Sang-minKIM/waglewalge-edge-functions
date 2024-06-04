import { css } from "@emotion/react";

export const globalStyle = css`
    * {
        margin: 0;
        padding: 0;
        color: inherit;
    }
    *,
    :after,
    :before {
        box-sizing: border-box;
    }
    :root {
        -webkit-tap-highlight-color: transparent;
        -webkit-text-size-adjust: 100%;
        text-size-adjust: 100%;
        cursor: default;
        line-height: 1.5;
        overflow-wrap: break-word;
        word-break: break-word;
        tab-size: 4;
    }
    html,
    body {
        height: 100dvh;
        background-color: #11141a;
        color: #e2e6ef;
    }
    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }
    button {
        background: none;
        border: 0;
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    li {
        list-style: none;
    }
    html {
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui;
    }
    dialog {
        max-width: 100%;
        max-height: 100%;
    }

    #root {
        height: 100dvh;
        margin: 0 auto;
    }
`;
