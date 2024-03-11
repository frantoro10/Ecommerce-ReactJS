import { useNavigate } from 'react-router-dom';
// Mis componentes
import RenderStars from './RenderStars'
// bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// styles
import styles from './ItemListContainer.module.scss';
// fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// import link


const ItemListContainer = ({ productsData }) => {

    const navigate = useNavigate();

    return (
        <div className={`d-flex my-2 ms-2 ms-md-5 flex-wrap`}>
            {productsData.map((item) => {
                return (
                    <Card key={item.id} className={`${styles.card}`} >
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body className=''>
                            <Card.Title className=''><h3>${item.price}</h3></Card.Title>
                            <Card.Text className={`${styles.detailsContainer}`}>
                                <div>
                                    {RenderStars(item.rating)}
                                </div>
                                <p>{item.version}</p>
                            </Card.Text>
                            <div className='d-flex justify-content-center '>
                            <Button variant="primary" onClick={() => navigate(`/item/${item.id}`)}>Mas detalles</Button>
                            </div>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>

    );
};


export default ItemListContainer;


// const ItemListContainer = ({ productsData }) => {
//     console.log(productsData)
//     return (
//         <div className={styles.cardContainer}>
//             {productsData.map((item) => {
//                 return (
//                     <div className={styles.cards}>
//                     <Card key={item.id}>
//                         <Card.Img variant="top" src={item.thumbnail} />
//                         <Card.Body>
//                             <Card.Title><h3>{item.title}</h3></Card.Title>
//                             <Card.Text>
//                                 <p>{item.description}</p>
//                                 <p>Price: ${item.price} & Stock: {item.stock}</p>
//                                 <p>Rating: {item.rating} </p>

//                             </Card.Text>
//                             <Link to={`/item/${item.id}`}>Mas detalles.</Link>
//                         </Card.Body>
//                     </Card>
//                     </div>
//                 );
//             })}
//         </div>
//     );