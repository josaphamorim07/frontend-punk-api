import { Pagination } from "@mui/material";
import styled from "styled-components";

export const PaginationStyle = styled(Pagination)`
  button {
    color: white;
  }
`;

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    padding-left: 5px;
    padding-right: 5px;
    
  }
`;
