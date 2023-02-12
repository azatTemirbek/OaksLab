/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo} from 'react';
import {SectionList} from 'react-native';
import {Checkbox, Text, useTheme} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {resetPhase, selectPhaseList, toggleTask} from '../redux/phase';
import {StackNavigationProp} from '../router/MainRouter';

export const ItemRow = styled.Pressable`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const SectionRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const BadgeView = styled.View`
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: 100px;
  margin-right: 10px;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  height: 35px;
`;

export const CheckIcon = styled(Entypo).attrs({
  name: 'check',
  size: 24,
})`
  margin-left: 20px;
`;

export function PhaseScreen() {
  const theme = useTheme();
  const {setOptions, navigate} = useNavigation<StackNavigationProp>();
  const data = useSelector(selectPhaseList);
  const dispatch = useDispatch();

  const sectionListData = useMemo(
    () =>
      data.map((phase, index) => ({
        title: phase.name,
        phaseIndex: index,
        position: index + 1,
        data: phase.tasks,
      })),
    [data],
  );

  const handleItemPress = useCallback(
    ({phaseIndex, taskIndex}: {phaseIndex: number; taskIndex: number}) =>
      () => {
        dispatch(
          toggleTask({
            phaseIndex,
            taskIndex,
          }),
        );
      },
    [dispatch],
  );

  const handleResetPress = useCallback(() => {
    dispatch(resetPhase());
  }, [dispatch]);

  useEffect(() => {
    setOptions({
      headerRight: () => (
        <Ionicons
          name="reload-circle-outline"
          size={24}
          onPress={handleResetPress}
        />
      ),
      title: 'My Startup Progress',
    });
  }, [handleResetPress, setOptions]);
  const isAllDataComplete = useMemo(
    () => data.every(phase => phase.tasks.every(task => task.isComplete)),
    [data],
  );
  useEffect(() => {
    if (isAllDataComplete) {
      navigate('RandomFact');
    }
  }, [data, isAllDataComplete, navigate]);

  return (
    <>
      <SectionList
        sections={[...sectionListData]}
        keyExtractor={(item, index) => `${item.id + index}`}
        renderItem={({item, index, section: {phaseIndex}}) => (
          <ItemRow
            onPress={handleItemPress({
              taskIndex: index,
              phaseIndex,
            })}>
            <Checkbox.Android
              status={item.isComplete ? 'checked' : 'unchecked'}
              onPress={handleItemPress({
                taskIndex: index,
                phaseIndex,
              })}
            />
            <Text variant="titleMedium">{item.description}</Text>
          </ItemRow>
        )}
        renderSectionHeader={({section: {title, data: tasks, position}}) => (
          <SectionRow>
            <BadgeView>
              <Text
                variant="headlineSmall"
                style={{
                  color: theme.colors.onPrimary,
                  fontWeight: '700',
                }}>
                {position}
              </Text>
            </BadgeView>
            <Text variant="headlineSmall" style={{fontWeight: '700'}}>
              {title}
            </Text>
            {tasks.every(item => item.isComplete) && <CheckIcon />}
          </SectionRow>
        )}
      />
    </>
  );
}

export default PhaseScreen;
