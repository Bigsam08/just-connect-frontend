/**
 * @description This is an helper function that helps convert the created at to a month and year format.
 *              e.g "dateJoined: May, 2026"
 */


export const FormatDateJoined = (created_at) => {
    if (!created_at) return "";

    const date = new Date(created_at);
    return date.toLocaleDateString("en-US", {month: "long", year: "numeric"});
};