import React, {useEffect} from 'react';
import {useMemo} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectPhaseList} from '../redux/phase';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '../router/MainRouter';

export function PhaseScreen() {
  const {setOptions} = useNavigation<StackNavigationProp>();

  const data = useSelector(selectPhaseList);
  console.log('data', data);

  useEffect(() => {
    setOptions({
      title: 'My Startup Progress',
    });
  }, [setOptions]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default PhaseScreen;
