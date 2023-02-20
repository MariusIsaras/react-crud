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
            <Box sx={{ fontSize: '1.3rem', color: 'primary.main', fontWeight: 600 }}>{uses}</Box>
            {/* <Styled.height_cm>{height_cm}</Styled.height_cm> */}
          </Box>
          <Typography component="h2" sx={{ fontWeight: 600, fontSize: '1.2rem' }}>{latin_name}</Typography>
          <Typography component="h3" sx={{ color: 'grey.500', fontSize: '1.1rem' }}>
            {`${name.lt_name}, ${name.en_name}`}
          </Typography>
        </Box>

        <Styled.ButtonContainer>
          <Button color="secondary" variant="outlined">Remeber</Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => navigate(routes.PlantsPage.createLink(id))}
          >
            View details
          </Button>
        </Styled.ButtonContainer>
      </Styled.ContentWrapper>
    </Stack>
  );
};

export default PlantsCard;
