type PlantsModel = {
  id: number,
  latin_name: string,
  name:{
    lt_name: string,
    en_name: string
  },
  description: string,
  uses: string,
  height_cm: number,
  habitat: string,
  images: string[],
};
