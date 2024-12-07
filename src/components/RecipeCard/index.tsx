import "@components/RecipeCard/index.scss"
import React from 'react';

interface RecipeCardProps {
    title: string;
    description: string;
  }

export const RecipeCard: React.FC<RecipeCardProps> = ({title, description}) => {
    return (
        <div className="recipe-card">
            <h3>{ title }</h3>
            <p>{description}</p>
        </div>
    )
}
