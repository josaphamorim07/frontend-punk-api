import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AuthLogin from "../../components/Auth/AuthLogin";
import CardBeers from "../../components/CardBeers/CardBeers";
import PaginationBeers from "../../components/PaginationBeers/PaginationBeers";
import api from "../../services/api";
import { IBeers } from "../../interface/Beers";
import { Grid } from "@mui/material";
import { ContainerHome, TitleHome } from "./styled";
import HeaderBeaers from "../../components/HeaderBeers/HeaderBears";

const Home = () => {
  const [dataBeer, setDataBeer] = useState<IBeers[]>([]);
  const [page, setPage] = useState<number>(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const numberOfPages = dataBeer ? 100 / 6 : 1;

  useEffect(() => {
    async function loadBeers() {
      await api.get(`/beers?page=${page}&per_page=6`).then(
        (response) => {
          setDataBeer(response.data);
        },
        (error) => {
          console.error(error);
        }
      );
    }
    loadBeers();
  }, [page]);

  const { isLoading, isAuthenticated } = useAuth0();
  if (isLoading) return <p>Loading......</p>;

  return (
    <ContainerHome>
      {isAuthenticated && <HeaderBeaers />}
      <TitleHome>
        {!isAuthenticated && (
          <span>Faça login para acessar a lista de cervejas.</span>
        )}
        <div>{!isAuthenticated && <AuthLogin />}</div>
      </TitleHome>

      {!dataBeer.length && <h3>Nao existe listagem...</h3>}

      {isAuthenticated && (
        <>
          <Grid container>
            {dataBeer.map((dataBeers) => (
              <Grid item xs={12} sm={6} md={4}>
                <CardBeers key={dataBeers.id} dataBeers={dataBeers} />
              </Grid>
            ))}
          </Grid>

          <PaginationBeers
            page={page}
            handleChange={handleChange}
            numberOfPages={numberOfPages}
          />
        </>
      )}
    </ContainerHome>
  );
};

export default Home;
