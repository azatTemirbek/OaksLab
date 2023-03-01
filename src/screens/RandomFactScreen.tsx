import styled from "styled-components";
import { useGerRandomFactQuery } from "../service/ApiService";
import { GrPowerReset } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { resetPhase } from "../redux/phase";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  flex-direction: column;
  align-items: center;
  padding-vertical: 10px;
  display: flex;
`
const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`
const RandomFactScreen = (): JSX.Element => {
  const { data, isLoading } = useGerRandomFactQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleResetPress = useCallback(() => {
    dispatch(resetPhase())
    navigate('/')
  }, [dispatch, navigate]);
  return isLoading ? (
    <h1>loading...</h1>
  ) : (
    <Container style={{ margin: 16 }}>
      <text>{data?.source}</text>
      <text>{data?.text}</text>
      <Button onClick={handleResetPress}>
        <GrPowerReset />
        Rest State
      </Button>
    </Container>
  );
};

export default RandomFactScreen;
