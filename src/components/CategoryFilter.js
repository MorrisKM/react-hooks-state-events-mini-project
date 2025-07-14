import React, {useState} from "react";

function CategoryFilter({categories, selectedCategories, setCategory}) {

  const categoryButtons = categories.map((category) => {
    const categoryClass = category===selectedCategories ? 'selected' : ''
    return <button key={category} className={categoryClass} onClick={() => setCategory(category)}>{category}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
