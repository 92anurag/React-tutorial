import Ingredient from './Ingredient';
import './IngredientsList.css'

const IngredientsList = ({list}) =>
    <ul className='ingredients'>
        {list.map((ingredient, index) =>
            <Ingredient key = {index} {...ingredient} />
        )}
    </ul>

export default IngredientsList;
