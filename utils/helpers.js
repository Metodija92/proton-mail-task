export const getHeaders = () => {
    const myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json;charset=utf-8');
    myHeaders.append('x-pm-appversion', 'Other');
    myHeaders.append('x-pm-apiversion', '3');
    myHeaders.append('Accept', 'application/vnd.protonmail.v1+json');

    const myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    return myInit;
};

export const filterResults = (result) => {
    const filtered = result.Plans.filter(item =>
        item.Name === 'plus' ||
        item.Name === 'professional' ||
        item.Name === 'visionary'
    );
    return filtered;
}