export const getLiferay = () => {
    const Liferay = window.Liferay;
    if (Liferay === null || Liferay === undefined)
        throw new Error("Liferay global object not found");
    return Liferay;
};
//# sourceMappingURL=liferay.js.map