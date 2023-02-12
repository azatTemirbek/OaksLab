/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useMemo} from 'react';
import {SectionList} from 'react-native';
import {useSelector} from 'react-redux';
import {selectPhaseList} from '../redux/phase';
import {StackNavigationProp} from '../router/MainRouter';
import {Checkbox, Text, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import styled from 'styled-components/native';

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

export const CheckIcon = styled(Icon).attrs({
  name: 'check',
  size: 24,
})`
  margin-left: 20px;
`;

export function PhaseScreen() {
  const theme = useTheme();
  const {setOptions, navigate} = useNavigation<StackNavigationProp>();

  const data = useSelector(selectPhaseList);

  useEffect(() => {
    setOptions({
      title: 'My Startup Progress',
    });
  }, [setOptions]);

  const isAllDataComplete = useMemo(
    () => data.every(phase => phase.tasks.every(task => task.isComplete)),
    [data],
  );

  useEffect(() => {
    if (isAllDataComplete) {
      navigate('RandomFact');
    }
  }, [isAllDataComplete, navigate]);

  return (
    <SectionList
      sections={[
        ...data.map((phase, phaseIndex) => ({
          title: phase.name,
          data: phase.tasks,
          position: phaseIndex + 1,
        })),
      ]}
      keyExtractor={(item, index) => `${item.id + index}`}
      renderItem={({item}) => (
        <ItemRow>
          <Checkbox.Android
            status={item.isComplete ? 'checked' : 'unchecked'}
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
  );
}

export default PhaseScreen;
