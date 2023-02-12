import React, {useEffect} from 'react';
import {useMemo} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {selectPhaseList} from '../redux/phase';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '../router/MainRouter';

export function PhaseScreen() {
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
  }, [data, isAllDataComplete, navigate]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default PhaseScreen;
