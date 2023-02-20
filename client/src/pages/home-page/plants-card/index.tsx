import {
  Stack,
  Box,
  Typography,
  Button,
} from '@mui/material';
import Img from '../../../components/layout/ui/img'
import routes from 'navigation/routes';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { blue } from '@mui/material/colors';

type PlantsCardProps = PlantsModel;

const PlantsCard: React.FC<PlantsCardProps> = ({
  id,
  images,
  name,
  uses,
  height_cm,
  latin_name,
}) => {
  const navigate = useNavigate();

  return (
    <Stack sx={{ boxShadow: 3, position: 'relative' }}>
      <Img src={images[0]} alt="" sx={{ aspectRatio: '1.42', width: 1 }} />
      <Styled.AdminActions>
        <Button
          variant="contained"
          color="warning"
          size="small"
          onClick={() => navigate(routes.PlantsUpdatePage.createLink(id))}
        >
          Update
        </Button>
        <Button variant="contained" color="error" size="small">
          Delete
        </Button>
      </Styled.AdminActions>
      <Styled.ContentWrapper>

        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ float: 'right', textAlign: 'right' }}>
            
            {/* <Styled.height_cm>{height_cm}</Styled.height_cm> */}
          </Box>
          <Typography component="h2" sx={{ fontWeight: 600, fontSize: '1.3rem' }}>{latin_name}</Typography>
          <Typography component="h3" sx={{ color: 'grey.600', fontSize: '1.1rem',  fontWeight: 400 }}>
            {`${name.lt_name}, ${name.en_name}`}
          </Typography>
          <Box sx={{ fontSize: '1rem', color: "black" }}>{uses}</Box>
        </Box>

        <Styled.ButtonContainer>
          <Button color="primary" variant="outlined">Remeber</Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => navigate(routes.PlantsPage.createLink(id))}
          >
            More Info
          </Button>
        </Styled.ButtonContainer>
      </Styled.ContentWrapper>
    </Stack>
  );
};

export default PlantsCard;
