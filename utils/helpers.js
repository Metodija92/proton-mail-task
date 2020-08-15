export const requestPlans = async (currency) => {
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

    const response = await fetch(`https://api.protonmail.ch/payments/plans?Currency=${currency}`, myInit);
    const result = await response.json();
    const filtered = result.Plans.filter(item =>
        item.Name === 'plus' ||
        item.Name === 'professional' ||
        item.Name === 'visionary'
    );
    return filtered;
};