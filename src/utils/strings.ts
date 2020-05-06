export const capitalize = (str: string | undefined | null) => {
    if(!str) return "";
    return `${str.slice(0,1).toUpperCase()}${str.slice(1).toLowerCase()}`
} 