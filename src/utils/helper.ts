//@ts-nocheck

export const delay = (ms = 0) =>
    new Promise((resolve) => setTimeout(resolve, ms));