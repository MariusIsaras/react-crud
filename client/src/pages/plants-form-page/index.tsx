import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Box,
  Button,
  Rating,
} from '@mui/material';
import useplant from 'hooks/usePlants';
import { useParams } from 'react-router-dom';
import ImagesField from './images-field';
import LocationField from './location-field';
import * as Styled from './styled';
import { btnColorMap, btnMap, titleMap } from './data';
import { formatValues } from './helpers';

type plantFormPageProps = {
  mode?: 'create' | 'update'
};

const plantFormPage: React.FC<plantFormPageProps> = ({ mode = 'create' }) => {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const { id } = useParams();
  const plant = useplant(id);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (formRef.current === null) return;

    try {
      const values = formatValues(formRef.current);
      if (mode === 'create') {
        console.log('Daromas Sukūrimas');
        console.log(values);
      } else {
        console.log('Daromas Atnaujinimas, id:', id);
        console.log(values);
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : error);
    }
  };

  if (mode === 'update' && plant === undefined) return null;

  return (
    <Styled.Container>
      <Styled.PaperForm elevation={4} onSubmit={handleSubmit} ref={formRef}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>{titleMap[mode]}</Typography>
        <Stack sx={{ gap: 2, mt: 2 }}>
          <TextField
            label="Title"
            fullWidth
            variant="filled"
            name="title"
            required
            defaultValue={plant?.title}
          />
          <LocationField
            defaultCountry={plant?.location.country}
            defaultCity={plant?.location.city}
          />
          <ImagesField defaultImages={plant?.images} />

          <TextField
            label="Price"
            fullWidth
            variant="filled"
            name="price"
            type="number"
            inputProps={{ step: '0.01' }}
            required
            defaultValue={plant?.price.slice(0, -1)}
          />
          <Box>
            <Typography component="legend">Rating</Typography>
            <Rating name="rating" defaultValue={plant?.rating} />
          </Box>

          <Stack alignItems="center" sx={{ mt: 2 }}>
            <Button
              type="submit"
              color={btnColorMap[mode]}
              variant="contained"
              size="large"
            >
              {btnMap[mode]}
            </Button>
          </Stack>
        </Stack>
      </Styled.PaperForm>
    </Styled.Container>
  );
};

export default plantFormPage;
