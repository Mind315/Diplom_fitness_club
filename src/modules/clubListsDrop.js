'use strict';

const clubListsDrop = () => {
    const clubsList = document.querySelector('.clubs-list');
    const ulClubList = clubsList.querySelector('ul');

    clubsList.addEventListener('click', () => {
        if(ulClubList.style.display === '') {
            ulClubList.style.display = 'block'; 
        } else {
            ulClubList.style.display = '';
        }
    });
};

export default clubListsDrop;