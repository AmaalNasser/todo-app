import React from 'react';

function FilterButtons({ setFilter }) {
    return (
        <div className="filter-buttons">
            <button onClick={() => setFilter('all')}>الكل</button>
            <button onClick={() => setFilter('active')}>غير المكتملة</button>
            <button onClick={() => setFilter('completed')}>المكتملة</button>
        </div>
    );
}


export default FilterButtons;