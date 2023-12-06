import './MenuItem.scss';

const MenuItem = ({ menuObj, highLights }) => {
  // let ing = menuObj.Ingredient;

  const highlightText = (text) => {
    const regex = new RegExp(`(${highLights.join('|')})`, 'gi');
    console.log(regex);
    return text.split(regex).map((part, index) =>
      highLights.includes(part.toLowerCase()) ? (
        <span key={index} className="highlighted">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <>
      <div className="menuItem">
        <div className="menuItem__txt">
          <div className="menuItem__txt-hAndPriceContainer">
            <h2 className="menuItem__txt-h">{menuObj.name}</h2>
            <p className="menuItem__txt-price">{menuObj.price}</p>
          </div>

          <p className="menuItem__txt-ing">
            {highLights
              ? highlightText(menuObj.Ingredient)
              : menuObj.Ingredient}
          </p>
        </div>
        <div className="menuItem__img">
          <img
            className="menuItem__img-img"
            alt={menuObj.name}
            src={menuObj.mealThumb}
          />
        </div>
      </div>
    </>
  );
};
export default MenuItem;
