import "@components/RecipeCard/index.scss";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import React from "react";

interface RecipeCardProps {
  title: string;
  description: string;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  title,
  description,
}) => (
  <div className="recipe-card">
    <h3>{title}</h3>
    <p>{description}</p>

    <div className="recipe-card-actions">
      <FaTrashAlt className="action-icon delete-icon" />
      <FaEdit className="action-icon edit-icon" />
    </div>
  </div>
);
