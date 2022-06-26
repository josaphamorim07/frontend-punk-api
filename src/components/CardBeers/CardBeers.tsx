import { IBeers } from "../../interface/Beers";
import { CardContainer, CardContent, GridDiv, ImgDiv } from "./styled";

interface Props {
  dataBeers: IBeers;
}

const CardBeers = ({ dataBeers }: Props) => {
  return (
    <GridDiv>
      <CardContainer>
        <ImgDiv>
          <img src={dataBeers.image_url} alt={dataBeers.name} />
        </ImgDiv>

        <CardContent>
          <div>
            <h3>{dataBeers.name}</h3>
          </div>
          <div>
            <p>{dataBeers.tagline}</p>
            <p>{dataBeers.first_brewed}</p>
          </div>
        </CardContent>
      </CardContainer>
    </GridDiv>
  );
};

export default CardBeers;
