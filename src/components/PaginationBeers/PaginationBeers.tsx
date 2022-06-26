import Typography from "@mui/material/Typography";
import { ContainerPagination, PaginationStyle } from "./styled";

type Props = {
  page: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  numberOfPages:number
};

const PaginationBeers = ({ page, handleChange,numberOfPages }: Props) => {

  console.log(page)
  return (
    <ContainerPagination>
      <Typography>Page:{page}</Typography>
      <PaginationStyle  count={Math.round(numberOfPages)} page={page} color="secondary" onChange={handleChange} />
    </ContainerPagination>
  );
};

export default PaginationBeers;
