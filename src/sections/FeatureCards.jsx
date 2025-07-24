import React from 'react';
import { abilities } from '../constants/index.js';

const FeatureCards = () => {
    return (
        <div className="w-full padding-g-lg">
         <div className="mx-auto grid-3-col">
            {abilities.map(({ imgPath, title, desc }) => (
        <div key={title} className="card-border rounded-xl p-8 flex flex-col gap-4">
            <div className="size-14 flex items-center justify-center rounded-full">
                <img src={imgPath} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    ))}
</div>
        </div>
    )
}

export default FeatureCards
