/*
 * @Author: Adam Li adam@bizzone.com
 * @Date: 2024-12-02 12:14:10
 * @LastEditors: Adam Li
 * @LastEditTime: 2024-12-02 12:18:45
 * @FilePath: /time_tracker/src/app/index.tsx
 */
import { Text} from 'react-native';
import { Redirect } from 'expo-router';
export default function Home() {
  return (
      <Redirect href="/(tabs)" />
  );
}