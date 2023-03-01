import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { resetPhase, selectPhaseList, toggleTask } from "../redux/phase";
import { MdCheck } from "react-icons/md";

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

const CheckInput = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  background-color: ${(props) => props.theme.colors.badge};
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.badgeText};
`

const SectionList = styled.div`
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  border-color: ${(props) => props.theme.colors.border};
  border-width: 30px;
  border-style: solid;
  padding: 30px;
  max-width: 400px;
  margin: auto;
`;

const Heading1 = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.heading1};
`

const Heading2 = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.heading2};
`
const Row = styled.div`
  flex-direction: row;
  align-items: center;
  padding-vertical: 10px;
  display: flex;
`

const Badge = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  background-color: ${(props) => props.theme.colors.badge};
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.badgeText};
`

export function PhaseScreen() {
  const navigate = useNavigate();
  const data = useSelector(selectPhaseList);
  const dispatch = useDispatch();

  const handleItemPress = useCallback(
    ({ phaseIndex, taskIndex }: { phaseIndex: number; taskIndex: number }) =>
      () => {
        dispatch(
          toggleTask({
            phaseIndex,
            taskIndex,
          })
        );
      },
    [dispatch]
  );

  const handleResetPress = useCallback(() => {
    dispatch(resetPhase());
  }, [dispatch]);

  const isAllDataComplete = useMemo(
    () => data.every((phase) => phase.tasks.every((task) => task.isComplete)),
    [data]
  );
  useEffect(() => {
    if (isAllDataComplete) {
      navigate("random-fact");
    }
  }, [data, isAllDataComplete, navigate]);

  return (
    <Container>
      <Heading1 onClick={handleResetPress} >My startup progress</Heading1>
      {data.map((phase, phaseIndex) => (
        <div>
          <Row>
            <Badge>{phaseIndex + 1}</Badge>
            <Heading2 key={phaseIndex}>{phase.name}</Heading2>
            {phase?.tasks?.every((item) => item.isComplete) && (
              <MdCheck size={24} />
            )}
          </Row>
          <SectionList>
            {phase.tasks.map((task, taskIndex) => (
              <Label >
                <CheckInput
                  type="checkbox"
                  checked={task.isComplete}
                  onChange={handleItemPress({
                    taskIndex,
                    phaseIndex,
                  })}
                />
                {task.description}
              </Label>
            ))}
          </SectionList>
        </div>
      ))}
    </Container>
  );
}

export default PhaseScreen;
