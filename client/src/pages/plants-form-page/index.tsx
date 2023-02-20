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
            label="Latin Name"
            fullWidth
            variant="filled"
            name="title"
            required
            defaultValue={plant?.latin_name}
          />
          <TextField
          label="LT name"
          fullWidth
          variant="filled"
          name="description"
          type="string"
          inputProps={{ step: '0.01' }}
          required
            defaultValue={plant?.name.lt_name}
            />
          <TextField 
          label="EN name"
          fullWidth
          variant="filled"
          name="description"
          type="string"
          inputProps={{ step: '0.01' }}
          required
          defaultValue={plant?.name.en_name}
            />
          
          <ImagesField defaultImages={plant?.images} />

          <TextField
            label="Description"
            fullWidth
            variant="filled"
            name="description"
            type="string"
            inputProps={{ step: '0.01' }}
            required
            defaultValue={plant?.description.slice(0, -1)}
            sx={{
              "& .MuiInputBase-root": {
                  height: 100
            }}}
          />
          <TextField
            label="Uses"
            fullWidth
            variant="filled"
            name="uses"
            type="string"
            inputProps={{ step: '0.01' }}
            defaultValue={plant?.uses.slice(0, -1)}
            sx={{
              "& .MuiInputBase-root": {
                  height: 100
            }}}
          />
          <TextField
            label="Habitat"
            fullWidth
            variant="filled"
            name="habitat"
            type="string"
            inputProps={{ step: '0.01' }}
            defaultValue={plant?.habitat.slice(0, -1)}
            sx={{
              "& .MuiInputBase-root": {
                  height: 100
            }}}
          />
          {/* <Box>
            <Typography component="legend">Rating</Typography>
            <Rating name="rating" defaultValue={plant?.rating} />
          </Box> */}

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
