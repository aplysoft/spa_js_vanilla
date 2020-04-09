const getHash = () =>
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;

    //location.hash.slice(2, -1).toLocaleLowerCase() || '/'; //funciona igual que el de arriba
