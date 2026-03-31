/**
 * @description This is an helper function that get the initials of any name passed as argument
 */


export const getNameInitials = (name) => {
    return name.trim().split(" ").map(word => word[0].toUpperCase()).join("");
}