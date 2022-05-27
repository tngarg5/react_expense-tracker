//for round corner and shadow
import './Card.css'
const Card = (props) => { //arrow function also works
    const classes = 'card ' + props.className
    return <div className={classes}>{props.children}</div>
}
export default Card;