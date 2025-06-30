// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { NativeModules } from 'react-native';

const { BootTime } = NativeModules;
interface BootTimeInterface {
  getTimeSinceBooted(): Promise<number>;
}
export default BootTime as BootTimeInterface;
