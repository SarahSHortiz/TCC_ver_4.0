// import PropTypes from 'prop-types';
// import './CardEditarAnimal.css';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import { CardActionArea } from '@mui/material';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import axios from 'axios';  
// import { Link } from 'react-router-dom';

// function CardsEditarAnimal({ cardanimal }) {
//     if (!cardanimal) {
//         return null;
//     }

//     const handleExcluir = () => {
//         axios.delete(`https://petfeliz.azurewebsites.net/api/PetFeliz/apagarPet/${cardanimal}`)
//             .then((response) => {
//                 if (response.status === 200) {
//                     alert("Card excluído com sucesso!");
//                 } else {
//                     alert("Erro ao excluir o card.");
//                 }
//             })
//             .catch((error) => {
//                 console.error("Erro ao excluir o card:", error);
//             });
//     };

//     return (
//         <div className='card-editar'>
//             <Card sx={{ maxWidth: 450, }}>
//       <CardActionArea>
//         <CardMedia className='card-img' sx={{ height: 150, }}>
//           <img src={cardanimal.foto_Pet} alt="Imagem do Card" style={{ objectFit: 'cover', width: '100%', }} />
//         </CardMedia>
//         <CardContent className='description' sx={{ marginBottom: '5%' }}>
//           <h1 style={{ marginBottom: '5%', objectFit: 'cover', color: '#5A3333' }}>{cardanimal.nome_Pet}</h1>
//           <div>
//                 <Stack spacing={2} direction="row">
//                     <Button onClick={handleExcluir} variant="contained">Remover</Button>
//                 </Stack>
//             </div>
//             <div>
//                 <Stack spacing={2} direction="row">
//                  <Link to={/PerfilAnimal}><Button variant="contained">Editar</Button></Link>
//                 </Stack>
//             </div>
//         </CardContent>
//       </CardActionArea>
//     </Card>
        
//         </div>
//     );
// }

// CardsEditarAnimal.propTypes = {
//     cardanimal: PropTypes.shape({
//         status_Pet: PropTypes.string.isRequired,
//         nome_Pet: PropTypes.string.isRequired,
//         logradouro: PropTypes.shape({
//             sexo_Pet: PropTypes.string.isRequired,
//             cep: PropTypes.string.isRequired,
//             nome_Estado: PropTypes.string.isRequired,
//             estado: PropTypes.string.isRequired,
//         }),
//         foto_Pet: PropTypes.string.isRequired,
//     }).isRequired,
// };

// export default CardsEditarAnimal;
