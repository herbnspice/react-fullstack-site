import { Link } from "react-router-dom";
import Articles  from "../data/articles.json";

const List = () => {
    return( 
        <div> 
            <h1> List </h1>
            <ul>
            {Articles.map( (article) => (
                <li key={article.name}>
                    <Link to={`/article/${article.name}`}> {article.title } </Link>
                </li>    
            ))}
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada quam ac eros vestibulum, ac tempus nisl luctus. Ut tempus at diam sed auctor. Maecenas vitae dolor vestibulum, accumsan massa sit amet, congue ex. Duis vel nunc dui. Nulla finibus ipsum vitae metus viverra, sit amet vehicula urna semper. Etiam non sollicitudin justo, eget mattis velit. Quisque venenatis sem vel tincidunt tempor. Nullam vitae magna vel ligula volutpat sodales non pretium nibh. Phasellus dictum tempus est, eget posuere enim pharetra sed. Phasellus luctus nulla vitae felis malesuada molestie ac quis magna. Cras sed vulputate ante. Mauris tincidunt ut metus et varius.
            </p>
        </div>
    )
}

export default List;